<?php 
session_start();
include_once $_SERVER['DOCUMENT_ROOT']."/config.php";
include_once $_SERVER['DOCUMENT_ROOT']."/app/tableClasses/chirp.php";
include_once $_SERVER['DOCUMENT_ROOT']."/app/tableClasses/user.php";


$chirpBody = $_POST['postText'];
// $user = $_SESSION['logged_user'];
$user = 1;

// Validation
if($user === null || $chirpBody === null) {
    echo "error";
    return false;
}

// Post
$chirp = new Chirp();
$chirp->uploadChirp($user, $chirpBody);

echo "success";
return true;

?>