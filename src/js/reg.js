/*
* @Author: 小猪
* @Date:   2019-05-16 13:36:33
* @Last Modified by:   小猪
* @Last Modified time: 2019-05-16 16:07:34
*/
// 注册提醒
//用户名的验证
var res1 = '';
$('#username').blur(function(){
	res1 = checkReg.tel($('#username').val());    
	if(res1){
		$.ajax({
			type : 'post',
			url : '../api/reg.php',
			async:false,
			data : 'usernames=' + $('#username').val(),
			success : function(str) {
				if(str == 'yes'){
					$('#usermes').html("该手机号可以注册");
					$('#usermes').css("color","#58bc58");
				}else{
					$('#usermes').html("该手机号已经注册");
					$('#usermes').css("color","red");
				}
			}
		});

	}
});

//密码验证
var res2 = '';
$('#password').focus(function(){
	$('#passmes').html("建议使用字母、数字和符号两种及以上的组合，6-20个字符");
	$('#passmes').css("color","#ccc");
});

// 密码
var res2 = '';
$('#password').keyup(function(){
    var num1 = 0;
    var passwordval = $('#password').val();
   if(passwordval.length >= 6){
	    var reg =  [/[a-z]/,/[A-Z]/,/[0-9]/,/[!@#$%^&*()]/];
	    for(i = 0; i < reg.length; i++){
	        for(j = 0;j <passwordval.length; j++){
	            if(reg[i].test(passwordval)){
	                num1++
	                break;
	            }
	        }
	    }
	    if(num1 <= 2){
	        $('#passmes').html("有被盗风险，建议使用字母和符号两种以上的组合");	
	    }
	    if(num1 == 3){
	    	$('#passmes').html("安全强度适中，可以使用三种以上的组合");	
	    }
	    if(num1 > 3){
	        $('#passmes').html("你的密码很安全");	
	    }
	}
	res2 = true;
});

//再次密码验证
var res3 = '';
$('#repassword').blur(function(){
	$('#repassmes').html("请再次输入密码");
	$('#repassmes').css("color","#ccc");
	res3 = checkReg.pwwagain($('#repassword').val(),$('#password').val());
});

	
//都为true,向后台发送数据
$('#regs').click(function(){    
console.log(res1,res2,res3);       
	if(res1 && res2 && res3){
		$.ajax({
			type : 'post',
			url : '../api/reg.php',
			async:false,
			data : 'usernames=' + $('#username').val() + '&password=' + $('#password').val(),
			success : function(str) {
				console.log(str);
				if(str == 'yes'){
					location.href = 'login.html';
				}else{
					alert('登陆不成功');
				}
			}
		});
	}

});