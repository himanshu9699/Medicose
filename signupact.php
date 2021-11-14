<?php

$firstname = $_POST['first'];
$lastname = $_POST['last'];
$email = $_POST['email'];
$pass = $_POST['pass'];

$con = new mysqli('localhost', 'root','','medicose');
$con->query("INSERT INTO `signup`(`id`, `firstname`, `lastname`, `email`, `password`) VALUES (NULL, '$firstname','$lastname','$email','$pass');");
echo "<script>alert('congo you are registered successfully')</script>"

?>