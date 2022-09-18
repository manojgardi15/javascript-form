<?php
include_once 'db.php';
if(isset($_POST['submit']))
{
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$gender = $_POST['gender'];
//$birth_date = $_POST['birth_date'];
$email = $_POST['email'];
$mobile_number = $_POST['mobile_number'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];

// database connection

$sql = "INSERT INTO newemployee (first_name,last_name,gender,email,mobile_number,address,city,state)
     VALUES ('$first_name','$last_name','$gender','$email','$mobile_number','$address','$city','$state')";
     if (mysqli_query($conn, $sql)) {
        echo "New record has been added successfully !";
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>