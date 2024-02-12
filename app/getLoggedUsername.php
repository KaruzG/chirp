<?php
include_once $_SERVER['DOCUMENT_ROOT'] . "/config.php";

// Check if any user is logged:
session_start();
if (!isset($_SESSION['logged_user'])) {
    echo "No logged user";
    header("Location: $ROOT_DIR/public/pages/login.html", true, 302);
    exit();
}


// Send username
include_once $_SERVER['DOCUMENT_ROOT'] . "/app/tableClasses/user.php";
$userConn = new User();
$loggedUser = $_SESSION['logged_user'];

$userInfo = $userConn->readUserByEmail($loggedUser);

header('Content-Type: application/json');
echo $userInfo['username'];

