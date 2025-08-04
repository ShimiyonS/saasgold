<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $url = "https://script.google.com/macros/s/AKfycbz_YCT1MyNQLXoj4UCvRqZTqKoseWAEMebpajHV1QJRpNaihmiOFJikcpW4flViwSG8/exec"; // Replace with your Script URL

    $data = [
        "name" => $_POST["name"],
        "email" => $_POST["email"],
        "message" => $_POST["message"]
    ];

    $options = [
        "http" => [
            "header" => "Content-type: application/x-www-form-urlencoded\r\n",
            "method" => "POST",
            "content" => http_build_query($data),
        ]
    ];

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) {
        echo "Error sending message.";
    } else {
        echo "Message sent successfully!";
    }
}
?>
