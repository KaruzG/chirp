<?php 
session_start();
include_once ['DOCUMENT_ROOT']."config.php";


if ($_SESSION['logged_user'] != null) {
    header("Location: $ROOT_DIR/public/pages/feed.html");
} else {
    header("Location: $ROOT_DIR/public/pages/login.html");
}

?>
