<?php 
include "../config.php";
 
try {
      $conn = new PDO(
        "mysql:host=". SERVERNAME .";dbname=chirp", 
        USERNAME, PASSWORD);
   
      // Set the PDO error mode 
      // to exception
      $conn->setAttribute(PDO::ATTR_ERRMODE, 
                  PDO::ERRMODE_EXCEPTION);
   
      echo "Connected successfully";
} catch(PDOException $e) {
      echo "Connection failed: " . $e->getMessage();
}
?>
