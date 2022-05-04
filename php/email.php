<?php
$headers = 'From: ' . $_POST['mail'] . "\r\n" .
    'Reply-To: '. $_POST['mail'];
$webmaster = 'amina.seraoui.31@gmail.com';
$success = mail($webmaster, 'New message', $_POST['message'], $headers);

$response = [
    'success' => $success
];

echo json_encode($response);
