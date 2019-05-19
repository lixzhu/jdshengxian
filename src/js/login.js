/*
* @Author: 小猪
* @Date:   2019-05-16 16:11:37
* @Last Modified by:   小猪
* @Last Modified time: 2019-05-18 19:53:42
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
						console.log(str);
						if(str == 'yes'){
							location.href = '../01index.html';
							setCookie('username',$('#loginname').val(),1);
						}else{
							alert('登陆不成功');
						}
					}
				});
		}
	});
