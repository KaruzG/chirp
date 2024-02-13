<?php
class Chirp{
    function __construct() {
        include_once $_SERVER['DOCUMENT_ROOT']."/config.php";
        include_once ROOT_DIR . "/app/main/database.php";

        $this->db = new Database();
    }

    // CRUD
    public function uploadChirp($chirpOwner, $body) {
        $data[0] = $chirpOwner;
        $data[1] = $body;

        $this->db->createRecord("tweets", $data);
    }

    public function readChirpByID($id) {
        return $this->db->readRecords("tweets", "tweet_id = '$id'");
    }


    // MISC
    public function renderChirp($id) { // Not tested
        echo "<chirp-box chirpID=$id></chirp-box>";
    }

    public function lastChirp() {
        return $this->db->latestId("tweets", "tweet_id");
    }
}
?>