<?php
include_once "./user.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from the form
    $email = $_POST["email"];
    $password = $_POST["password"];
    $username = $_POST["username"];

    $user = new User();

    $result = $user->create($username, $email, $password);

    if ($result) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Account created</title>
    <link rel="stylesheet" href="../public/css/reset.css">
    <link rel="stylesheet" href="../public/css/login.css">
</head>
<body>
    <header class="header"></header>
    <main>
        <div class="page">
            <div class="outer-container">
                <div class="heading">
                    <h2>Account created!</h2>
                </div>
                <div class="">
                <a href="../public/pages/login.html"><input type="button" value="Log in"></a>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
<?php
        // Exit the PHP script after displaying the confirmation page
        exit;
    } else {
        echo "Account creation failed. User with this email already exists.";
    }
}
?>
