<?php
$server= "localhost";
$username = "root";
$password = "root";
$db = "userhighscore"
// Creating connection
$db = new mysqli($server, $username, $password) or die("couldnt connect!");

mysql_select_db($db);
echo "Connected";
?>
