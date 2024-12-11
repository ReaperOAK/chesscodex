<?php
include 'config.php';

// Set the Content-Type header to application/json
header('Content-Type: application/json');

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Get the email from the decoded data
$email = $data['email'] ?? '';

// Validate the email
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO newsletters (email) VALUES (?)");
    if ($stmt === false) {
        echo json_encode(['success' => false, 'message' => 'Prepare failed: ' . $conn->error]);
        exit;
    }
    $stmt->bind_param("s", $email);

    // Execute the statement
    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Email subscribed successfully.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Execute failed: ' . $stmt->error]);
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
}

// Close the connection
$conn->close();
?>