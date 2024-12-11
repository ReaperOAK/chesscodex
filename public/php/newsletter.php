<?php
include 'config.php';

// Set the Content-Type header to application/json
header('Content-Type: application/json');

// Get the email from the POST request
$email = $_POST['email'] ?? '';

// Validate the email
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO newsletters (email) VALUES (?)");
    $stmt->bind_param("s", $email);

    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Email subscribed successfully.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to subscribe email.']);
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
}

// Close the connection
$conn->close();
?>