/*
* @Author: 小猪
* @Date:   2019-05-16 16:11:37
* @Last Modified by:   lixzhu
* @Last Modified time: 2019-05-20 00:11:59
*/
	$('#loginbtn').click(function() {
		//判断是否已经登陆
		if(getCookie('username')) {
			alert('请退出先登陆');
		}else{

			$.ajax({
					type : 'post',
					url : '../api/login.php',
					async:false,
					data : 'usernames=' + $('#loginname').val() + '&password=' + $('#password').val(),
					success : function(str) {
						if(str == 'yes'){
							location.href = '../index.html';
							setCookie('username',$('#loginname').val(),1);
						}else{
							alert('登陆不成功');
						}
					}
				});
		}
	});
