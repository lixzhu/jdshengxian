<?php

$name = isset($_POST['usernames']) ? $_POST['usernames'] : '';
	$password = isset($_POST['password']) ? $_POST['password'] : '';
	//连接数据库
	include 'conn.php';
	//存入数据库
	if($password){
		$sql = "INSERT INTO userinf(username,passwords) VALUES('$name','$password')";
		//获取查询数据集
		$res = $conn->query($sql);
		// var_dump($res);
		//返回状态结果给前端
		if($res) {
			echo 'yes';//数据插入成功
		}else{
			echo 'no';//数据插入不成功
		}
	}else{
		$sql = "SELECT * FROM userinf WHERE username ='$name'";
		$res = $conn->query($sql);
		if($res->num_rows) {
			echo 'no';//已有该用户
		}else{
			echo 'yes';//没有该用户
		}
	}
?>
