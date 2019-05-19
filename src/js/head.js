/*
* @Author: 小猪
* @Date:   2019-05-12 12:50:12
* @Last Modified by:   小猪
* @Last Modified time: 2019-05-18 23:48:23
*/

	// hover事件
	//box1为hover对象
	// box2为hover显示的盒子
	// box3为改变hover对象的下边框
function head() {
	function mohover(box1,box2,box3){
		box1.onmouseover = function() {
			box1.style.background = '#fff';
			box2.style.display = 'block';
			box3.style.display = 'block';
		}
		// 鼠标离开
		box1.onmouseout = function() {
			box1.style.background = '#e3e4e5';
			box2.style.display = 'none';
			box3.style.display = 'none';
		}
	}
	//地址块js代码块
	var location = document.getElementById('location');
	var nav_black = document.getElementById('nav_black');
	var dorpdownlayer = document.getElementById('dorpdownlayer');
	var where = document.getElementById('where');
	// 鼠标经过
	location.onmouseover = function() {
		location.style.background = '#fff';
		nav_black.style.display = 'block';
		dorpdownlayer.style.display = 'block';
		//点击改变地址
		location.onclick = function(ev) {
			if(ev.target.className == 'wherecont'){
				where.innerHTML = ev.target.innerHTML;
			}
		}
	}
	// 鼠标离开
	location.onmouseout = function() {
		location.style.background = '#e3e4e5';
		nav_black.style.display = 'none';
		dorpdownlayer.style.display = 'none';
	}


	//我的京东
	var myjd_dorpdown = document.getElementById('myjd_dorpdown');
	var nav_myjd = document.getElementById('nav_myjd');
	var dd_spacer1 = document.getElementById('dd_spacer1');
	var dd_spacer3 = document.getElementById('dd_spacer3');
	var dd_spacer4 = document.getElementById('dd_spacer4');

	mohover(nav_myjd,myjd_dorpdown,dd_spacer1);

	//企业采购
	var purdorpdown = document.getElementById('purdorpdown');
	var purchase = document.getElementById('purchase');
	var dd_spacer2 = document.getElementById('dd_spacer2');
	
	mohover(purchase,purdorpdown,dd_spacer2);

	//客户服务
	var servedorpdown = document.getElementById('servedorpdown');
	var serve = document.getElementById('serve');

	mohover(serve,servedorpdown,dd_spacer3);

	//网站导航
	var websitedorpdown = document.getElementById('websitedorpdown');
	var website = document.getElementById('website');

	mohover(website,websitedorpdown,dd_spacer4);


	//判断是已登陆
	if(getCookie('username')){
		$('#nav_lr').html('欢迎，' + getCookie('username'));
		$('#nav_exitoreg').attr('href','');
		$('#nav_exitoreg').html('退出');
		$('#nav_exitoreg').click(function() {
			removeCookie('username');
			$('#nav_lr').html('你好,请登录');
			$('#nav_exitoreg').html('免费注册');
		});

	}else{
		$('#nav_lr').click(function() {
			window.open('login.html');
		});
		$('#nav_exitoreg').click(function() {
			window.open('reg.html');
		});
	}
}


