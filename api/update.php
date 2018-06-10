<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE employees SET
email ='$data->email',  firstName ='$data->firstName',
lastName ='$data->lastName',password ='$data->password',
role ='$data->role',  color ='$data->color',
status ='$data->status',country ='$data->country'
WHERE _id = $data->_id ";
$qry = $conn->query($sql);
if($data->firstName){
}
$conn->close();
?>
