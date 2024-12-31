<?php
include 'config.php';

// Set the Content-Type header to application/json
header('Content-Type: application/json');

// Get the raw POST data
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Get the form data from the decoded data
$role = $data['role'] ?? '';
$name = $data['name'] ?? '';
$age = $data['age'] ?? '';
$email = $data['email'] ?? '';
$country_code = $data['country_code'] ?? '';
$phone_number = $data['phone_number'] ?? '';
$message = $data['message'] ?? '';
$subscribe_newsletter = isset($data['subscribe_newsletter']) ? 1 : 0;
$agree_privacy_policy = isset($data['agree_privacy_policy']) ? 1 : 0;

// Validate the form data
if (!empty($role) && !empty($name) && !empty($age) && filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($country_code) && !empty($phone_number) && !empty($message) && $agree_privacy_policy) {
    // Prepare the SQL statement for contact submissions
    $stmt = $conn->prepare("INSERT INTO contact_submissions (role, name, age, email, country_code, phone_number, message, subscribe_newsletter, agree_privacy_policy) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if ($stmt === false) {
        echo json_encode(['success' => false, 'message' => 'Prepare failed: ' . $conn->error]);
        exit;
    }
    $stmt->bind_param("ssisssiii", $role, $name, $age, $email, $country_code, $phone_number, $message, $subscribe_newsletter, $agree_privacy_policy);

    // Execute the statement
    if ($stmt->execute()) {
        // If the user subscribed to the newsletter, add their email to the newsletters table
        if ($subscribe_newsletter) {
            $newsletter_stmt = $conn->prepare("INSERT INTO newsletters (email) VALUES (?)");
            if ($newsletter_stmt === false) {
                echo json_encode(['success' => false, 'message' => 'Newsletter prepare failed: ' . $conn->error]);
                exit;
            }
            $newsletter_stmt->bind_param("s", $email);
            if ($newsletter_stmt->execute()) {
                $newsletter_stmt->close();
            } else {
                echo json_encode(['success' => false, 'message' => 'Newsletter execute failed: ' . $newsletter_stmt->error]);
                exit;
            }
        }
        echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Execute failed: ' . $stmt->error]);
    }

    // Close the statement
    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid form data.']);
}

// Close the connection
$conn->close();
?>