<?php
// FILE: public/php/application_form.php
// ACTION: Rewritten to use MySQLi Prepared Statements to prevent SQL injection.

// Include the new secure config file
require 'config.php';

// --- VULNERABLE CODE (FOR REFERENCE - DO NOT USE) ---
/*
$name = $_POST['name'];
$email = $_POST['email'];
// ... and so on for all fields

// This next line is the security hole. You are directly inserting user input
// into the SQL query. A malicious user could provide input like:
// name = "'; DROP TABLE registrations; --"
// This would destroy your table.
$sql = "INSERT INTO registrations (name, email, phone, dob, gender, address, city, state, pincode, country, course, message)
        VALUES ('$name', '$email', '$phone', '$dob', '$gender', '$address', '$city', '$state', '$pincode', '$country', '$course', '$message')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => mysqli_error($conn)]);
}
*/
// --- END VULNERABLE CODE ---


// --- SECURE CODE (THE NEW STANDARD) ---

// 1. Get data from the POST request
// We still get the data the same way.
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$dob = $_POST['dob'] ?? '';
$gender = $_POST['gender'] ?? '';
$address = $_POST['address'] ?? '';
$city = $_POST['city'] ?? '';
$state = $_POST['state'] ?? '';
$pincode = $_POST['pincode'] ?? '';
$country = $_POST['country'] ?? '';
$course = $_POST['course'] ?? '';
$message = $_POST['message'] ?? '';

// 2. Prepare the SQL statement with placeholders (?)
// Instead of putting variables directly in the string, we use question marks.
// This tells the database "expect data to be bound here later."
$sql = "INSERT INTO registrations (name, email, phone, dob, gender, address, city, state, pincode, country, course, message)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

// 3. Create a prepared statement object
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    // If the prepare fails, there's an error in your SQL syntax.
    echo json_encode(['status' => 'error', 'message' => 'SQL prepare failed: ' . $conn->error]);
    exit();
}

// 4. Bind the variables to the prepared statement
// This is the most critical security step.
// The database engine treats the data as pure data, not as part of the SQL command.
// 'ssssssssssss' is the type definition string. 's' for string. There are 12 fields, so 12 's'.
// If you had an integer, you would use 'i'. For a double, 'd'.
$stmt->bind_param('ssssssssssss',
    $name,
    $email,
    $phone,
    $dob,
    $gender,
    $address,
    $city,
    $state,
    $pincode,
    $country,
    $course,
    $message
);

// 5. Execute the statement and check for success
if ($stmt->execute()) {
    echo json_encode(['status' => 'success', 'message' => 'Registration successful!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Execution failed: ' . $stmt->error]);
}

// 6. Close the statement and the connection
$stmt->close();
$conn->close();

?>