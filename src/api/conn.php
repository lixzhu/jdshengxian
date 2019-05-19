<?php

	// //链接数据库
	$servername = 'localhost';//主机名
	$username = 'root';//数据库登录名
	$dbpsw = '';//数据库的登陆密码
	$dbname = 'jdshengxian';//数据库的名字

	$conn = new mysqli($servername,$username,$dbpsw,$dbname);

	// 检测链接
	if($conn->connect_error) {
		die("链接失败：".$conn->connect_error);
	}
	// echo '连接成功';
	
	//写查询语句
	// $sql = 'SELECT * FROM usrinf';
	// $res = $conn->query($sql);
	//获取具体数据(对象)
	// $content = $res->fetch_all(MYSQLI_ASSOC);
	// var_dump($content);

	//将对象转为字符串传给前端
	// echo json_encode($content,JSON_UNESCAPED_UNICODE);

	// $res->close();//关闭结果集
	// $conn->close();//关闭数据库
?>
