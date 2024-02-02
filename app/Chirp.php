<?php
class Chirp{
    function __construct() {
        include_once $_SERVER['DOCUMENT_ROOT']."/config.php";
        include_once ROOT_DIR . "/app/database.php";

        $this->db = new Database();
    }

    public function uploadChirp($chirpOwner, $body) {
        $data[0] = $chirpOwner;
        $data[1] = $body;

        $this->db->createRecord("tweets", $data);
    }
}
?>