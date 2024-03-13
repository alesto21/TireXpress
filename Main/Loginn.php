<?php
session_start(); // Start session for storing user login status

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Replace these with actual database credentials
    $db_host = "127.0.0.1";
    $db_username = "tirexpress";
    $db_password = "";
    $db_name = "tirexpress";

    // Connect to database
    $conn = new mysqli($db_host, $db_username, $db_password, $db_name);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Query to check if user exists with given username
    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    // Check if user exists
    if ($result->num_rows > 0) {
        // Fetch user data
        $row = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $row['password'])) {
            // Password is correct, redirect to logged-in page
            $_SESSION["username"] = $username; // Store username in session for later use
            header("Location: logged_in.php");
            exit();
        } else {
            // Password is incorrect, redirect back to login page with error
            header("Location: login_page.php?error=invalid_password");
            exit();
        }
    } else {
        // User doesn't exist, redirect back to login page with error
        header("Location: login_page.php?error=user_not_found");
        exit();
    }
} else {
    // If the form was not submitted via POST method, redirect the user back to the login page
    header("Location: login_page.php");
    exit();
}
?>
