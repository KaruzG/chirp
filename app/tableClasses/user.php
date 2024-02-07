<?php
class User{
    function __construct() {
        include_once $_SERVER['DOCUMENT_ROOT']."/config.php";
        include_once $_SERVER['DOCUMENT_ROOT']."/app/main/database.php";

        $this->db = new Database();
    }

    public function create($name, $email, $password) {
        if($this->read($email) != false) {
            return false;
        }

        $password = password_hash($password, PASSWORD_DEFAULT);
        $this->db->createRecord("users", "'$name', '$email', '$password'");
    }

    public function read($condition) {
        $userInfo = $this->db->readRecords("users", $condition);

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