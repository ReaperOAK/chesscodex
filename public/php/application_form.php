<?php

include 'config.php';

header('Content-Type: application/json');


// Get the form data
$data = json_decode(file_get_contents('php://input'), true);
$full_name = $data['full_name'];
$email = $data['email'];
$phone_number = $data['phone_number'];
$course = $data['course'];

// Insert the data into the database
$sql = "INSERT INTO applications (full_name, email, phone_number, course) VALUES ('$full_name', '$email', '$phone_number', '$course')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => $conn->error]);
}

$conn->close();
?>