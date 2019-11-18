<?php
$server= "localhost";
$username = "root";
$password = "root";
$db = "userhighscore";
// Creating connection
$conn = new mysqli($server, $username, $password);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$var1 = $_POST['var1'];
$var2 = $_POST['var2'];



$sql = "INSERT INTO highscore (Name, HighScore)
VALUES ('$var1', '$var2')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


?>

