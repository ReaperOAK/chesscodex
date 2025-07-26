<?php
// FILE: public/php/contact.php
// ACTION: Rewritten to use MySQLi Prepared Statements.

require 'config.php';

// Get data from POST request
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// Prepare SQL with placeholders
$sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";

// Create prepared statement
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    echo json_encode(['status' => 'error', 'message' => 'SQL prepare failed: ' . $conn->error]);
    exit();
}

// Bind parameters (s = string, s = string, s = string)
$stmt->bind_param('sss', $name, $email, $message);

// Execute and respond
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Message sent successfully!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Execution failed: ' . $stmt->error]);
}

// Clean up
$stmt->close();
$conn->close();

?>