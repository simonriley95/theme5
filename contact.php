<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize inputs
    $name  = htmlspecialchars(trim($_POST['fname']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $msg   = htmlspecialchars(trim($_POST['msg']));

    // Validation
    if (empty($name) || empty($phone) || empty($email) || empty($msg)) {
        echo "All fields are required.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Receiver
    $to = "operations@pharmainstinct.com";

    // Subject
    $subject = "New Contact Form Message";

    // Message body
    $message = "You have received a new message:\n\n";
    $message .= "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n\n";
    $message .= "Message:\n$msg\n";

    // Headers (important for deliverability)
    $headers = "From: no-reply@pharmainstinct.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>