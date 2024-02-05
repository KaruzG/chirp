<?php
// This class will handle connections to the DB and basic CRUD actions
include_once "../config.php";

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
            case 'users':
                $stm = "INSERT INTO $tableName(username, email, password_hash) VALUES ($data)";
                break;
            default:
                throw New Error("Table ($tableName) not found in database.");
                return false;
        }

        if ($conn->query($stm) == false) {
            echo "ERROR: CREATE failed." . $conn->error;
            return false;
        }

        $this->closeDb($conn);
        return true;
    }

    public function readRecords($tableName, $condition = null) {
        $conn = $this->openDb();

        if ($condition === null) {
            $stm = $conn->prepare("SELECT * FROM $tableName");
            $stm->setFetchMode(PDO::FETCH_ASSOC);
            $stm->execute();

            $this->closeDb($conn);
            return $stm->fetchAll();
        }

        $stm = $conn->prepare("SELECT * FROM $tableName WHERE $condition");
        $stm->setFetchMode(PDO::FETCH_ASSOC);
        $stm->execute();

        return $stm->fetch();

        $this->closeDb($conn);
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
