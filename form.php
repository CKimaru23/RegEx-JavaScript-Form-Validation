<?php
//connecting to the database whose name is 'resume'
//Servername=localhost
//username=root
//password=empty
//database name=formValidator

    $conn = mysqli_connect("localhost", "root","","formValidator");

//Checking connection
    if($conn===false){
        die("Error: Could not connect. ".mysqli_connect_error());
    }

//Taking the inputs
    $fname = $_REQUEST['fname'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $bdate = $_REQUEST['bdate'];
    $url   = $_REQUEST['url'];
    $password = $_REQUEST['password'];
    $password2 = $_REQUEST['password2'];

//Performing insert query execution
//Our table name is called 'formValidator'
    $sql="INSERT INTO formValidator VALUES ('$name', '$email', '$phone', '$bdate', '$url','$password','$password2')";

//Return message


//Close connection
    mysqli_close($conn);

?>
