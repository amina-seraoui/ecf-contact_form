<?php
include_once './validation.php';

$success = false;
$errors = [];

if (isset($_POST['mail'], $_POST['name'], $_POST['message'])) {
    $success = true;
    $name = htmlspecialchars($_POST['name']);
    $mail = htmlspecialchars($_POST['mail']);
    $message = htmlspecialchars($_POST['message']);
} else {
    $errors[] = 'Required fields are not set.';
}

if ($success && !verifyName($name)) {
    $success = false;
    $errors = ['name' => 'The name is not a valid name.'];
}

if ($success && !verifyMail($mail)) {
    $success = false;
    $errors = ['mail' => 'The mail is not a valid mail.'];
}

if ($success && !verifyMsg($message)) {
    $success = false;
    $errors = ['message' => 'The message is too short.'];
}

if ($success) {
    $headers = 'From: ' . $mail . "\r\n" .
        'Reply-To: '. $mail;

    $webmaster = 'amina.seraoui.31@gmail.com';

    $subject = 'New message from ' . $name;

    $success = mail($webmaster, $subject, $message, $headers);

    !$success ? $errors[] = 'An error occured. Retry later.' : null;
}

header('Content-Type: application/json');
echo json_encode(compact('success', 'errors'));
