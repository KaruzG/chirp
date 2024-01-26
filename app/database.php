<?php
// This class will handle connections to the DB and basic CRUD actions
include_once $_SERVER['DOCUMENT_ROOT']."/config.php";

class Database {
    // DB CONNECTOR (Returns PDO connection object)
    private function openDb() { 
        try {
              $conn = new PDO(
                "mysql:host=". SERVERNAME .";dbname=chirp", 
                USERNAME, PASSWORD);
           
              // Set the PDO error mode 
              // to exception
              $conn->setAttribute(PDO::ATTR_ERRMODE, 
                          PDO::ERRMODE_EXCEPTION);

              echo "Connected successfully";

              return $conn;

            } catch(PDOException $e) {
              echo "Connection failed: " . $e->getMessage();
        }

    }

    private function closeDb($conn) {
        $conn = null;
    }

    public function createRecord($tableName, $data) {
        $conn = $this->openDb();

        echo $data;

        $stm = "INSERT INTO $tableName VALUES ($data)";

        if ($conn->query($stm) == true) {
            echo "Yay";
        } else {
            echo "ERROR: CREATE failed." . $conn->error;
        }

        $this->closeDb($conn);
    }

    public function readRecords($tableName, $condition = null) {
    }

    public function updateRecord($tableName, $data, $condition) {
    }

    public function deleteRecord($tableName, $condition) {
    }
}
?>
