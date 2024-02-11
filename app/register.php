<?php
include_once $_SERVER['DOCUMENT_ROOT'] . "/config.php";
include_once $_SERVER['DOCUMENT_ROOT'] . "/app/tableClasses/user.php";
include_once $_SERVER['DOCUMENT_ROOT'] . "/app/main/logger.php";

$logger = new Logger();


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $logger->log("[INFO] - User (". $_POST["email"] .") creation triggered");
    // Get data from the form
    $email = $_POST["email"];
    $password = $_POST["password"];
    $username = $_POST["username"];

    $user = new User();

    try {
        $user->create($username, $email, $password);
        $user->loginUser($email);
        
        header("Location: $ROOT_DIR/public/pages/feed.html", true, 302);
        exit;
    } catch (Exception $err) {
        $logger->log("[ERROR] - User (". $_POST["email"] .") creation FAILED");
        echo "Account creation failed: " . $err;
    }
}
header("Location: $ROOT_DIR/public/pages/login.html", true, 302);
?>
