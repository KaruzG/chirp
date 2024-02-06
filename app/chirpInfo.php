<?php 
include_once $_SERVER['DOCUMENT_ROOT']."/config.php";
include_once $_SERVER['DOCUMENT_ROOT']."/app/tableClasses/chirp.php";
include_once $_SERVER['DOCUMENT_ROOT']."/app/tableClasses/user.php";



$chirpToRenderID = $_GET["chirpId"];

if ($chirpToRenderID != null) {
    $chirpCon = new Chirp();
    $chirpInfo = $chirpCon->readChirpByID($chirpToRenderID);

    //Fetch username
    $userId = $chirpInfo['user_id'];
    $userCon = new User();
    $userInfo = $userCon->read("user_id = $userId");

    $chirpInfo['username'] = $userInfo['username'];

    header("Content-Type: application/json");

    echo json_encode($chirpInfo);
}
?>