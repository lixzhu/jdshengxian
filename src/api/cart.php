<?php
	//接收前端数据
	$usernames = isset($_POST['getname']) ? $_POST['getname'] :'';
	$gid = isset($_POST['gid']) ? $_POST['gid'] : '';


	//链接数据库
	include 'conn.php';
	// 接收数据
	if($gid){

		$sql2 = "DELETE FROM shoppinglist WHERE usernames ='$usernames' AND gid ='$gid'";

		$res = $conn->query($sql2);//结果集

		echo $res;

	}else{

		$sql2 = "SELECT * FROM shoppinglist WHERE usernames ='$usernames'";

		// 获取结果集
		$res = $conn->query($sql2);

		// 获取具体数据
		$content = $res->fetch_all(MYSQLI_ASSOC);

		// var_dump($conttmlent);
		echo json_encode($content,JSON_UNESCAPED_UNICODE);
	}

?>