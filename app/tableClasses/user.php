<?php
class User{
    function __construct() {
        include_once $_SERVER['DOCUMENT_ROOT']."/config.php";
        include_once $_SERVER['DOCUMENT_ROOT']."/app/main/database.php";
        include_once $_SERVER['DOCUMENT_ROOT'] . "/app/main/logger.php";

        $this->logger = new Logger();
        $this->db = new Database();
    }

    public function create($name, $email, $password) {
        if($this->readUserByEmail($email) != false) {
            return false;
        }

        $password = password_hash($password, PASSWORD_DEFAULT);
        $this->db->createRecord("users", "'$name', '$email', '$password'");
    }


    // Not working
    public function read($condition) {
        $userInfo = $this->db->readRecords("users", $condition);

        if ($userInfo == null) {
            return false;
        }

        return $userInfo;
    }

    public function readUserByEmail($email) {
        return $this->db->readRecords("users", "email = '$email'");
    }

    public function update($id, $parameter, $value) {
    }


    public function delete($id) {
    }

    public function validatePassword($password, $userEmail) {
        $userInfo = $this->readUserByEmail($userEmail);

        if(password_verify($password, $userInfo['password_hash'])) {
            return true;
        } else {
            $this->logger->log("[ALERT] - User (". $userInfo['username'] .") account tried to be accessed unsuccessfully");
            return false;
        }
    }

    public function loginUser($userEmail) {
        $userInfo = $this->readUserByEmail($userEmail);
        session_start();
        $_SESSION["logged_user"] = $userInfo['email'];
        $this->logger->log("[INFO] - User (". $userInfo['username'] .") successfully logged in");
    }

    public function closeSession() {
        session_start();
        session_unset();
        session_destroy();
        header("Location: $ROOT_DIR/public/pages/login.php");
    }
}
?>