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
                error_log("Database connection failed: " . $e->getMessage());
                throw new Exception("Database connection failed");
        }

    }

    private function closeDb($conn) {
        $conn = null;
    }

    public function createRecord($tableName, $data) {
        $conn = $this->openDb();
        switch ($tableName) {
            case 'users':
                $stm = "INSERT INTO $tableName (username, email, password_hash) VALUES ($data)";
                break;

            case 'tweets':
                $user = $data[0];
                $body = $data[1];
                $stm = "INSERT INTO $tableName(user_id, content) VALUES ($user, '$body')";
                break;

            default:
                throw new Exception("Table ($tableName) not found in database.");
        }
    
        if ($conn->query($stm) === false) {
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

    // MISC

    public function latestId($tableName, $col) {
        $conn = $this->openDb();
        $stm = $conn->prepare("SELECT MAX($col) FROM $tableName");
        $stm->setFetchMode(PDO::FETCH_ASSOC);
        $stm->execute();

        $this->closeDb($conn);
        return $stm->fetch();
    }
}
?>
