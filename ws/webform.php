<?php
    include_once('PHPMailer/src/PHPMailer.php');
    include_once('PHPMailer/src/SMTP.php');
    include_once('PHPMailer/src/Exception.php');

    $email = isset($_POST['email']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ? htmlspecialchars($_POST["email"]) : '';
    $body = isset($_POST['body']) ? $_POST["body"] : '';
    if ($_SERVER["REQUEST_METHOD"] === "POST" && trim($email) !== '' && trim($body)){
        
        $mail = new PHPMailer\PHPMailer\PHPMailer();
        $mail->isSMTP();
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->Username = 'vik.mtdiev@gmail.com';
        $mail->Password = '9609174505aa';
        $mail->CharSet = 'UTF-8';   
        $mail->setFrom('vik.mtdiev@gmail.com', "Заявка за процедура");
        // $mail->addAddress($email);
        $mail->addAddress("vik.mtdiev@gmail.com");
        
        $mail->isHTML(true);
        
        $mail->Subject = 'Заявка за процедура';
        $mail->Body = $body;

        if (!$mail->send()) {
            echo 'error';
        } else {
            echo 'ok';
        }
    } else {
        echo 'error';
    }    
?>