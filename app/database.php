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

        switch($tableName) {
            case "users":
                $stm = "INSERT INTO $tableName(username, email, password_hash) VALUES ($data)";
            default:
                throw New Error("Table ($tablename) not found in database.");

        }

        if ($conn->query($stm) == false) {
            // echo "ERROR: CREATE failed." . $conn->error;
        }

        $this->closeDb($conn);
        return true;
    }

    public function readRecords($tableName, $condition = null) {
        $conn = $this->openDb();

        // ...

        $this->closeDb($conn);
        return true;
    }

    public function updateRecord($tableName, $data, $condition) {
        $conn = $this->openDb();

        // ...

        $this->closeDb($conn);
        return true;
    }

    public function deleteRecord($tableName, $condition) {
        $conn = $this->openDb();

        // ...

        $this->closeDb($conn);
        return true;
    }
}
?>
