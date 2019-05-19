<?php
	include "conn.php";

	$sql = "SELECT * FROM gooodslist WHERE gid LIMIT 0,15";

	$res = $conn->query($sql);

	$content = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>