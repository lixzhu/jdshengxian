<?php

	include "conn.php";

	$gid = isset($_POST['gid']) ? ($_POST['gid']) : '';
	$usernames = isset($_POST['usernames']) ? ($_POST['usernames']) : '';
	$much = isset($_POST['much']) ? ($_POST['much']) : '';
	$howsize = isset($_POST['howsize']) ? ($_POST['howsize']) : '';
	$describei = isset($_POST['describei']) ? ($_POST['describei']) : '';
	$bigimg = isset($_POST['bigimg']) ? ($_POST['bigimg']) : '';
	$shopname = isset($_POST['shopname']) ? ($_POST['shopname']) : '';
	$price = isset($_POST['price']) ? ($_POST['price']) : '';

	if($gid && $much && $usernames){
		$sql = "select * FROM shoppinglist WHERE usernames = $usernames AND gid = $gid";//是否已有商品

		$res = $conn->query($sql);

		if($res->num_rows){
			//是，则增加购物车的数量

			$sql1 = "UPDATE shoppinglist set num = num + $much where gid = $gid AND usernames = $usernames";

			$res = $conn->query($sql1);

			if($res){
				echo 'yes';
			}else{
				echo 'no';
			}

		}else{
			//否：则插入数据
			$sql = "INSERT INTO shoppinglist(usernames,gid,num,bigimg,size,describei,shopname,price) VALUES('$usernames','$gid','$much','$bigimg','$howsize','$describei','$shopname','price')";
			$res = $conn->query($sql);

			if($res){
				echo 'yes';
			}else{
				echo 'no';
			}

		}
	}else{

		$sql = "SELECT * FROM gooodslist WHERE gid = $gid";

		$res = $conn->query($sql);

		$content = $res->fetch_all(MYSQLI_ASSOC);

		echo json_encode($content,JSON_UNESCAPED_UNICODE);
	}

?>