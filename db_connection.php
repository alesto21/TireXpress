<?php
$host = "localhost"; // Replace with your host name (usually "localhost")
$dbname = "TireXpress"; // Replace with your database name
$user = "root"; // Replace with your database username
$password = ""; // Replace with your database password

// Full path to PHP executable
$php_executable = 'C:\xampp\php.exe'; // Replace with the actual path to PHP executable

// Connect to MySQL/MariaDB database
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Perform a simple query to test connection
$query = "SELECT 1";
$result = $conn->query($query);

if ($result === FALSE) {
    die("Query failed: " . $conn->error);
} else {
    echo "Connected to MySQL/MariaDB server and PHPMyAdmin successfully!";
}

// Close connection
$conn->close();
?>
