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
if (!empty($_POST['website'])) respond(true, 'Thank you.');

function clean($v) { return trim(strip_tags((string)$v)); }
function no_newlines($v) { return preg_replace('/[\r\n]+/', ' ', $v); }

$name     = no_newlines(clean($_POST['name'] ?? ''));
$email    = trim($_POST['email'] ?? '');
$phone    = no_newlines(clean($_POST['phone'] ?? ''));
$position = no_newlines(clean($_POST['position'] ?? ''));
$message  = clean($_POST['message'] ?? '');

if ($name === '' || $phone === '' || $position === '') respond(false, 'Please fill in all required fields.', 422);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) respond(false, 'Please enter a valid email address.', 422);

// Resume validation
if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
    respond(false, 'Please attach your resume.', 422);
}
$file = $_FILES['resume'];
if ($file['size'] > 5 * 1024 * 1024) respond(false, 'Resume must be under 5 MB.', 422);

$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
if (!in_array($ext, ['pdf', 'doc', 'docx'], true)) respond(false, 'Resume must be a PDF, DOC or DOCX file.', 422);

if (!is_dir($config['upload_dir']) && !mkdir($config['upload_dir'], 0750, true)) {
    respond(false, 'Server could not store the resume.', 500);
}
$stored = bin2hex(random_bytes(12)) . '.' . $ext; // random name, original name never used on disk
if (!move_uploaded_file($file['tmp_name'], $config['upload_dir'] . '/' . $stored)) {
    respond(false, 'Could not save your resume. Please try again.', 500);
}

$body = "New job application\n\nName: $name\nEmail: $email\nPhone: $phone\nPosition: $position\n"
      . "Resume file: $stored (in " . $config['upload_dir'] . ")\n\nCover note:\n$message\n";
$headers = [
    'From: Space Zone Defence <' . $config['from_email'] . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=utf-8',
];

$sent = mail($config['to_email'], 'Job application: ' . $position . ' — ' . $name, $body, implode("\r\n", $headers));
if (!$sent) respond(false, 'Application saved but notification failed. Please also email us directly.', 500);

respond(true, 'Application received. Thank you — our team will be in touch.');
