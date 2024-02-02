<?php
include_once $_SERVER['DOCUMENT_ROOT'] . "/app/user.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from the form
    $email = $_POST["email"];
    $password = $_POST["password"];
    $username = $_POST["username"];

    $user = new User();

    $result = $user->create($username, $email, $password);

    if ($result) {
        echo "Account created successfully!";
    } else {
        echo "Account creation failed. User with this email already exists.";
    }
}
