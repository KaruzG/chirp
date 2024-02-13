<?php
    session_start();
    include_once $_SERVER['DOCUMENT_ROOT']."/app/tableClasses/Chirp.php";
    include_once $_SERVER['DOCUMENT_ROOT']."/app/tableClasses/user.php";
    include_once $_SERVER['DOCUMENT_ROOT']."/app/main/logger.php";

    $logger = new Logger();
    $user = new User();

    $userInfo = $user->readUserByEmail($_SESSION['logged_user']);

    $chirpBody = $_POST['postText'];
    $user = $userInfo['user_id'];

    // Validation
    if($user === null || $chirpBody === "") {
        $logger->log("[ERROR] - Trying to post a chirp with no user or body");
        return false;
    }

    // Post
    $chirp = new Chirp();
    $chirp->uploadChirp($user, $chirpBody);

    $logger->log("[INFO] - Chirp from $user successfully uploaded to the database");

?>