<?php

	$name = isset($_POST['usernames']) ? $_POST['usernames'] : '';
	$password = isset($_POST['password']) ? $_POST['password'] : '';
	
	include 'conn.php';
	
	//sql语句
	$sql = "SELECT * FROM userinf WHERE username='$name' AND passwords='$password'";
	
	//执行语句
	$res = $conn->query($sql);//结果集
	// var_dump($res);
	
	//返回状态
	if($res->num_rows) {
		//找到，允许登陆
		echo 'yes';
	}else{
		//找不到，不允许登陆
		echo 'no';
	}
	

?>