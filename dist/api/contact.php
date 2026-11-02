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
function no_newlines($v) { return preg_replace('/[\r\n]+/', ' ', $v); }

$name    = no_newlines(clean($_POST['name'] ?? ''));
$email   = trim($_POST['email'] ?? '');
$phone   = no_newlines(clean($_POST['phone'] ?? ''));
$subject = no_newlines(clean($_POST['subject'] ?? ''));
$message = clean($_POST['message'] ?? '');

if ($name === '' || $subject === '' || strlen($message) < 10) {
    respond(false, 'Please fill in all required fields.', 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Please enter a valid email address.', 422);
}

$body = "New contact enquiry\n\nName: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\n\n$message\n";
$headers = [
    'From: Space Zone Defence <' . $config['from_email'] . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=utf-8',
];

$sent = mail($config['to_email'], 'Website enquiry: ' . $subject, $body, implode("\r\n", $headers));
if (!$sent) respond(false, 'Could not send your message right now. Please try again later.', 500);

respond(true, 'Thank you — we will get back to you soon.');
