<?php
$host = 'localhost';
$db   = 'u703958259_dashboard';
$user = 'u703958259_admin';
$pass = '1!jqkNyFs';

// Create a new MySQLi connection
$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>