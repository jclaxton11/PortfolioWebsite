<?php

if (!isset($_SESSION)) {
    session_start();
}
// Check if username and password are correct (You need to replace these with your actual credentials)
$valid_username = "jeffclax";
$valid_password = "GoCornhuskers2025$";

if ($_POST["username"] === $valid_username && $_POST["password"] === $valid_password) {
    // Authentication successful, set session variable
    $_SESSION["authenticated"] = true;
    header("Location: blog.php");
    exit();
} else {
    // Authentication failed, redirect back to login page with error message
    header("Location: loginForm.php?error=1");
    exit();
}
?>