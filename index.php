<?php 
session_start();
include_once "config.php";


if ($_SESSION['logged_user'] != null) {
    header("Location: $ROOT_DIR/public/pages/feed.php");
} else {
    header("Location: $ROOT_DIR/public/pages/login.php");
}

?>