<?php

class Logger {
    public function __construct() {
        $this->logFilePath = $_SERVER['DOCUMENT_ROOT']."/log/mainLog.txt";

        if (!file_exists($this->logFilePath)) {
            $this->createLogFile();
        }
    }

    private function createLogFile() {
        // Create the log file
        $file = fopen($this->logFilePath, 'w');

        if ($file) {
            // Close the file
            fclose($file);
        } else {
            // Handle the error (e.g., log to another file, display an error message)
            error_log("Failed to create log file: $this->logFilePath", 0);
        }
    }

    public function log($text) {
        $timestamp = date('Y-m-d H:i:s');
        $logEntry = "[$timestamp] $text\n";

        // Open the log file in append mode
        $file = fopen($this->logFilePath, 'a');

        if ($file) {
            // Write the log entry to the file
            fwrite($file, $logEntry);

            // Close the file
            fclose($file);
        } else {
            // Handle the error (e.g., log to another file, display an error message)
            error_log("Failed to open log file: $this->logFilePath", 0);
        }
    }
}