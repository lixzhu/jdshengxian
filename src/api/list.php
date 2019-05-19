<?php

	include "conn.php";
	//接收页数
	$page = isset($_POST['page']) ? ($_POST['page']) : '';//页数
	$pagenum = isset($_POST['pagenum']) ? ($_POST['pagenum']) : '';//一页多少数据
	$what = isset($_POST['what']) ? ($_POST['what']) : '';
	$size = isset($_POST['size']) ? ($_POST['size']) : '';
	$onenum = isset($_POST['onenum']) ? ($_POST['onenum']) : '';
	$twonum = isset($_POST['twonum']) ? ($_POST['twonum']) : '';
	$assess = isset($_POST['assess']) ? ($_POST['assess']) : '';//评论的升降
	$somes = isset($_POST['somes']) ? ($_POST['somes']) : '';//头部搜索框的内容
	// 数据库的下标为
	// $num2 = $page * $pagenum - 1;
	if($page){
		$num1 = ($page - 1) * $pagenum;//开始小标
		$sql = "SELECT * FROM gooodslist LIMIT $num1,$pagenum";
	}if($what){
		$sql = "SELECT * FROM gooodslist WHERE brand LIKE '%$what%'";
	}if($size){
		$sql = "SELECT * FROM gooodslist WHERE  size LIKE '%$size%'";
	}
	if($onenum){
		$sql = "SELECT * FROM gooodslist WHERE price BETWEEN $onenum AND $twonum";
	}if($assess){
		$sql = "SELECT * FROM gooodslist ORDER BY assess $assess";
	}if($somes){
		$sql = "SELECT * FROM gooodslist WHERE brand LIKE '%$somes%'";
	}


	$res = $conn->query($sql);

	$content = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($content,JSON_UNESCAPED_UNICODE);

?>