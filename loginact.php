<?php
 
 $email = $_POST["email"];
 $password = $_POST["password"];

   $con = new mysqli("localhost", "root", "", "medicose");

   $result = $con->query("select *from signup where email='$email' and password='$password' ");


    if($result->fetch_assoc()){
           session_start();
           $_SESSION["user"] = $email;
    	
       header("Location: http://localhost/xampp/WebProject/home.html");

    }else{

    	echo "Wrong password or user does not exist";
    }

    
?>