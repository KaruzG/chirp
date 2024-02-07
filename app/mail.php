<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'].'/vendor/phpmailer/phpmailer/src/Exception.php';
require $_SERVER['DOCUMENT_ROOT'].'/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'].'/vendor/phpmailer/phpmailer/src/SMTP.php';

include_once $_SERVER['DOCUMENT_ROOT'].'/config.php';

class ChirpMail {
    function __construct() {
        $this->mail = new PHPMailer(true);
    }

    public function send($sendTo, $subject, $body) {
        try {
            $this->mail->isSMTP();                                              //Send using SMTP
            $this->mail->Host       = SMTP_HOST;                                //Set the SMTP server to send through
            $this->mail->SMTPAuth   = true;                                     //Enable SMTP authentication
            $this->mail->Username   = SMTP_USER;                                //SMTP username
            $this->mail->Password   = SMTP_PASSWORD;                            //SMTP password
            $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;           //Enable implicit TLS encryption
            $this->mail->Port       = 587;                                      //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
        
            //Recipients
            $this->mail->setFrom(SMTP_USER, MAIL_NAME);
            $this->mail->addAddress($sendTo);                  //Name is optional
        
            //Content
            $this->mail->isHTML(true);                                          //Set email format to HTML
            $this->mail->Subject = $subject;
            $this->mail->Body    = $body;
        
            $this->mail->send();
            header("HTTP/1.0 200 Success");
            echo 'Message has been sent';
        } catch (Exception $e) {
            header("HTTP/1.0 500 Internal server error");
            echo "Message could not be sent. Mailer Error: {$this->mail->ErrorInfo}";
        }
    }
}