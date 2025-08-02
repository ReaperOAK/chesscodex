<?php
// FILE: public/php/newsletter.php
// ACTION: Rewritten to use MySQLi Prepared Statements.

require 'config.php';

// Get data from POST request
$email = $_POST['email'] ?? '';

// Basic email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid email format.']);
    exit();
}

// Prepare SQL with a placeholder
$sql = "INSERT INTO newsletter_subscriptions (email) VALUES (?)";

// Create prepared statement
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    echo json_encode(['status' => 'error', 'message' => 'SQL prepare failed: ' . $conn->error]);
    exit();
}

// Bind the email parameter (s = string)
$stmt->bind_param('s', $email);

// Execute and respond
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Subscribed successfully!']);
} else {
    // Check for duplicate entry error (error code 1062)
    if ($conn->errno === 1062) {
        echo json_encode(['status' => 'error', 'message' => 'This email is already subscribed.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Execution failed: ' . $stmt->error]);
    }
}

// Clean up
$stmt->close();
$conn->close();

?>