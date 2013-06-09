<?php
$username = $_GET["username"];
$password = $_GET["password"];
$db = mysqli_connect("localhost", "root", "password", "nutrition_db");
$results = mysqli_query($db, "SELECT * FROM MACROS_T WHERE UserName=" . $username);
$ret;
$i = 0;
while ($row = mysqli_fetch_array($results)) {
	$ret[$i] = $row;
	$i++;
}
echo json_encode($ret);
?>
