<?php
include_once $_SERVER['DOCUMENT_ROOT']."/app/tableClasses/user.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $user = new User();

    // Validate user credentials
    if ($user->validatePassword($password, $email)) {
        // Start session and store user's email
        $user->loginUser($email);

        // Redirect user to feed page
        header("Location: ../public/pages/feed.html");
        exit();
    } else {
        // Invalid credentials
        echo "Invalid email or password. Please try again.";
    }
}
?>
