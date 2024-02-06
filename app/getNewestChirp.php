<?php
   include_once $_SERVER['DOCUMENT_ROOT']."/config.php";
   include_once $_SERVER['DOCUMENT_ROOT']."/app/tableClasses/chirp.php";
   include_once $_SERVER['DOCUMENT_ROOT']."/app/tableClasses/user.php";
   
   $chirp = New Chirp();
   $latestChirp = $chirp->lastChirp();

   header('Content-Type: application/json');

   $response = array(
      'lastChirp' => $latestChirp['MAX(tweet_id)'],
   );

   echo json_encode($response);
?>