/*
* @Author: 小猪
* @Date:   2019-05-16 08:55:34
* @Last Modified by:   小猪
* @Last Modified time: 2019-05-16 12:55:58
*/

// 手机input的聚焦
$('#phone').focus(function(){
	$('#phonemeg').html("验证完成后，你可以使用该手机登录或找回密码");
	$('#phonemeg').css("color","#ccc");
});

//点击验证
$('#phonebtn').click(function(){
	var phoneVal = $('#phone').val();
	var num = checkReg.tel(phoneVal);
	if(num){
		$('#verBox').css('display','block');
		imgVer({
            el: '$("#imgVer")', //绑定的节点
            width: '330', //设置长
            height: '125', //设置宽
            img: [ //图片库 
                '../img/ver.png',
                '../img/ver-1.png',
                '../img/ver-2.png',
                '../img/ver-3.png'
            ],
            success: function() {
                $('#verBox').css('display','none');
                $('#phonebtn').html('');
                $('.message').css('display','block');
                $.ajax({
                	type : 'get',
                	url : '../api/reg.php',
                	async:false,
                	data : 'phone=' + phoneVal,
                	success : function(str) {
                		console.log(str);
                	}
                });
                $('.message').css('display','block');
            },
                error: function() {
                    // console.log(no);
                }
            });


	}else{
		$('#phonemeg').html("手机号不正确，请重新输入");
		$('#phonemeg').css("color","red");
	}
});