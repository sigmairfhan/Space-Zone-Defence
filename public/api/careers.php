<?php
$config = require __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . $config['allowed_origin']);
header('Access-Control-Allow-Methods: POST, OPTIONS');

function respond($ok, $message, $code = 200) {
    http_response_code($code);
    echo json_encode(['success' => $ok, 'message' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') respond(true, 'ok');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') respond(false, 'Method not allowed.', 405);

// Honeypot: bots fill this, humans never see it
if (!empty($_POST['website'])) respond(true, 'Thank you.');

function clean($v) { return trim(strip_tags((string)$v)); }
function one_line($v) { return preg_replace('/[\r\n]+/', ' ', clean($v)); }

$first    = one_line($_POST['first_name'] ?? '');
$last     = one_line($_POST['last_name'] ?? '');
$name     = trim("$first $last");
$email    = trim($_POST['email'] ?? '');
$phone    = one_line($_POST['phone'] ?? '');
$position = one_line($_POST['position'] ?? '');
$address  = one_line($_POST['address'] ?? '');
$city     = one_line($_POST['city'] ?? '');
$state    = one_line($_POST['state'] ?? '');
$zip      = one_line($_POST['zip'] ?? '');
$country  = one_line($_POST['country'] ?? '');
$pay      = one_line($_POST['desired_pay'] ?? '');
$linkedin = trim($_POST['linkedin'] ?? '');

if ($first === '' || $last === '' || $phone === '' || $position === '') {
    respond(false, 'Please fill in all required fields.', 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 422);
}
if ($linkedin !== '' && !preg_match('#^https?://#i', $linkedin)) {
    respond(false, 'LinkedIn URL must start with http:// or https://', 422);
}
$linkedin = one_line($linkedin);

// Saves an uploaded PDF/DOC/DOCX under a random name; returns the stored name or null.
function save_upload($key, $required, $dir) {
    if (!isset($_FILES[$key]) || $_FILES[$key]['error'] === UPLOAD_ERR_NO_FILE) {
        if ($required) respond(false, 'Please attach your resume.', 422);
        return null;
    }
    $file = $_FILES[$key];
    if ($file['error'] !== UPLOAD_ERR_OK) respond(false, 'File upload failed. Please try again.', 422);
    if ($file['size'] > 5 * 1024 * 1024) respond(false, 'Files must be under 5 MB.', 422);

    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, ['pdf', 'doc', 'docx'], true)) {
        respond(false, 'Files must be PDF, DOC or DOCX.', 422);
    }
    if (!is_dir($dir) && !mkdir($dir, 0750, true)) respond(false, 'Server could not store the file.', 500);

    $stored = bin2hex(random_bytes(12)) . '.' . $ext; // random name; original name is never used on disk
    if (!move_uploaded_file($file['tmp_name'], $dir . '/' . $stored)) {
        respond(false, 'Could not save your file. Please try again.', 500);
    }
    return $stored;
}

$resume = save_upload('resume', true, $config['upload_dir']);
$cover  = save_upload('cover_letter', false, $config['upload_dir']);

$body  = "New job application\n\n";
$body .= "Position: $position\n";
$body .= "Name: $name\nEmail: $email\nPhone: $phone\n";
$body .= "Address: $address, $city, $state $zip, $country\n";
$body .= "Desired pay: $pay\nLinkedIn: $linkedin\n\n";
$body .= "Resume file: $resume\n";
$body .= 'Cover letter file: ' . ($cover ?: '(none)') . "\n";
$body .= 'Stored in: ' . $config['upload_dir'] . "\n";

$headers = [
    'From: Space Zone Defence <' . $config['from_email'] . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=utf-8',
];

$sent = mail($config['to_email'], 'Job application: ' . $position . ' — ' . $name, $body, implode("\r\n", $headers));
if (!$sent) respond(false, 'Application saved but notification failed. Please also email us directly.', 500);

respond(true, 'Application received. Thank you — our team will be in touch.');
