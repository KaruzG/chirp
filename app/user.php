<?php
class User{
    function __construct() {
        include_once $_SERVER['DOCUMENT_ROOT']."/config.php";
        include_once ROOT_DIR . "/app/database.php";

        $this->db = new Database();
    }

    public function create($name, $email, $password) {
        // Needs to check email, and hash password before. Probably better in JS
        $this->db->createRecord("users", "'$name', '$email', '$password'");
    }

    public function read() {
    }

    public function update($id, $parameter, $value) {
    }


    public function delete($id) {
    }
}
?>