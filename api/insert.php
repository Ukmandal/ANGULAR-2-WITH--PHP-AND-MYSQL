<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO employees (email, firstName, lastName, password, role, color, status, country)
VALUES ('$data->email', '$data->firstName', '$data->lastName', '$data->password',
'$data->role','$data->color','$data->status','$data->country')";
if($data->firstName){
	$qry = $conn->query($sql);
}
$conn->close();
?>
