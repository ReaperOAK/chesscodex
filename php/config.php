<?php
// FILE: public/php/config.php
// ACTION: Rewritten to use MySQLi for a secure, modern connection.

// ** IMPORTANT **
// This file is now the single source of truth for your database connection.
// It establishes a connection using MySQLi and makes the $conn object
// available to any script that includes it.

header("Access-Control-Allow-Origin: *"); // For development only. For production, you should restrict this to your domain.
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// --- Database Credentials ---
// Replace with your actual database credentials
$servername = "localhost";
$username = "youu703958259_adminr_db_username";
$password = "1!jqkNyFs";
$dbname = "u703958259_dashboard";

// --- Establish Connection using MySQLi (The "i" is for "improved") ---
$conn = new mysqli($servername, $username, $password, $dbname);

// --- Check Connection ---
if ($conn->connect_error) {
    // Stop execution and return a clear error message.
    // In a production environment, you might log this error instead of showing it to the user.
    die(json_encode(['status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error]));
}

// Set character set to utf8mb4 for full Unicode support
$conn->set_charset("utf8mb4");

// No need to return anything. Any script that `require`s this file
// will have access to the $conn object.

?>