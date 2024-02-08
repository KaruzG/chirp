<?php
// CONFIGURATION FILE FOR CHIRP APP

    // APP -------------------------------------------
        define('ROOT_DIR', $_SERVER['DOCUMENT_ROOT']);


    // DATABASE --------------------------------------

        // DATABASE LOCATION
        define('SERVERNAME', "localhost");

        // USERNAME and PASSWORD
        define('USERNAME', "root");
        define('PASSWORD', "password");



    // MAIL ------------------------------------------

        // SMTP
        define('SMTP_HOST', "smtp.office365.com");
        define('SMTP_USER', "chirp@outlook.es");
        define('SMTP_PASSWORD', "");
        define('SMTP_PORT', 587);

        // MAIL
        define('MAIL_NAME', "Chirp");

?>