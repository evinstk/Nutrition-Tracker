<?php
$db = mysqli_connect("localhost", "root", "password", "nutrition_db");
$results = mysqli_query($db, "SELECT * FROM nutrition_t");
$ret;
$i = 0;
while ($row = mysqli_fetch_array($results)) {
    $ret[$i] = $row;
	$i++;
}
echo json_encode($ret);
?>