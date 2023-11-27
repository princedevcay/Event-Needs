<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $vendorName = strip_tags(trim($_POST["vendorName"]));
    $contactPerson = strip_tags(trim($_POST["contactPerson"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $website = strip_tags(trim($_POST["website"]));
    $serviceCategory = strip_tags(trim($_POST["serviceCategory"]));
    $experienceYears = strip_tags(trim($_POST["experienceYears"]));
    $companySize = strip_tags(trim($_POST["companySize"]));

    // Check that data was sent to the mailer.
    if (empty($vendorName) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($contactPerson) OR empty($phone) OR empty($serviceCategory) OR empty($experienceYears) OR empty($companySize)) {
        // Set a 400 (bad request) response code and exit.
        http_response_code(400);
        echo "Please complete the form and try again.";
        exit;
    }

    // Set the recipient email address
    $recipient = "info@event-needs.com";

    // Set the email subject
    $subject = "New Vendor Sign Up from $vendorName";

    // Build the email content
    $email_content = "Vendor Name: $vendorName\n";
    $email_content .= "Contact Person: $contactPerson\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Website: $website\n";
    $email_content .= "Service Category: $serviceCategory\n";
    $email_content .= "Years of Experience: $experienceYears\n";
    $email_content .= "Company Size: $companySize\n";

    // Build the email headers
    $email_headers = "From: $vendorName <$email>";

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Set a 200 (okay) response code
        http_response_code(200);
        echo "Thank You! Your message has been sent.";
    } else {
        // Set a 500 (internal server error) response code
        http_response_code(500);
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }

} else {
    // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
