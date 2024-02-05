<?php
class User{
    function __construct() {
        include_once "../config.php";
        include_once "./database.php";

        $this->db = new Database();
    }

    public function create($username, $email, $password) {
        if($this->read($email) != false) {
            return false;
        }

        $password = password_hash($password, PASSWORD_DEFAULT);
        // Needs to check email Probably better in JS
        $this->db->createRecord("users", "'$username', '$email', '$password'");
    }

    public function read($email) {
        $userInfo = $this->db->readRecords("users", "email = '$email'");

        if ($userInfo == null) {
            return false;
        }

        return $userInfo;
    }

    public function update($id, $parameter, $value) {
    }


    public function delete($id) {
    }

    public function validatePassword($password, $userEmail) {
        $userInfo = $this->read($userEmail);

        if(password_verify($password, $userInfo['password_hash'])) {
            return true;
        } else {
            return false;
        }
    }

    public function loginUser($userEmail) {
        $userInfo = $this->read($userEmail);
        session_start();
        $_SESSION["logged_user"] = $userInfo['email'];
    }

    public function closeSession() {
        session_destroy();
        header("Location: $ROOT_DIR/public/pages/login.php");
    }
}
?>