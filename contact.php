<?php

$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['message'];
$con = new mysqli('localhost','root','','medicose');
$con->query("INSERT INTO `contactus` (`id`,`name`,`email`,`message`) VALUES (NULL,'$name','$email','$msg');");
echo `<script>alert('form registered successfully')</script>`;

?>