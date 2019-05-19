//头部特效
(function(){
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
					console.log(where.innerHTML); 
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


	//轮播图
	imgscroll('bannerbox','active');

	//点击购物车跳转
	$('.logo_gwcbtn').click(function(){
		window.open('html/cart.html');
	})




	//请求数据
	$.ajax({
		type : 'post',
		url : 'api/01index.php',
		success : function(str){
			create(str)
		}
	});
	//渲染数据
	function create(str){
		var arr = JSON.parse(str);//字符串转数组
		var html = arr.map(function(item){
			return `<li class="xianshili">
		                <a href="####" data-gid="${item.gid}" class="goodsgid">
		                    <div class="price">
		                        <span class="big">&yen;${item.price}</span>
		                        <span class="small">&yen;${item.price * 1 + 20}</span>
		                    </div>
		                    <div class="tupian">
		                        <img src="${item.bigimg}" alt="">
		                    </div>
		                    <p class="shipin">${item.describei}</p>
		                    <div class="haopin">
		                        <p>好评97%</p>
		                        <div class="line1"></div>
		                    </div>
		                    <p class="goumai">立即抢购</p>
		                </a>
		            </li>`
		}).join('');
		$('#killlu').html(html);
	}

	//事件委托
	$('#killlu').on('click','.goodsgid',function(){
		var gid = $(this).attr('data-gid');
		window.open('html/detailed.html?' + gid);
	});

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
			window.open('html/login.html');
		});
		$('#nav_exitoreg').click(function() {
			window.open('html/reg.html');
		});
	}

//电子时钟
	var endtime = '2019-5-29 11:38:00';//字符串
		var end = Date.parse(endtime);//毫秒数
		
		//2.不断获取系统当前的时间(开定时器)，终点时间 - 当前时间  <= 0 秒
		function showtime() {
			//new Date().gettime() 获取系统当前时间，并转成毫秒数
			var nowtime = Date.now();//获取系统当前时间，并转成毫秒数
			var dix = parseInt((end - nowtime)/1000);//两个时间相隔的秒数
			if(dix <= 0) {
				//到达临界点
				clearInterval(timer);//关闭定时器
			}else{
				//没到达终点
				//3.毫秒数->xx天xx时xx分xx秒
				var time = setTime(dix);
				var html = time.days + `天${time.hours}时${time.mins}分${time.secs}秒`;
				var hour = `${time.hours}`;
				var min = `${time.mins}`;
				var sec = `${time.secs}`;
				$('#hour').html(hour);
				$('#min').html(min);
				$('#sec').html(sec);

			}
//				
		}
		
		showtime();

		var timer = setInterval(showtime,1000);//1秒后才执行第一次
		
		
		//毫秒数->xx天xx时xx分xx秒
		function setTime(time) {
			var sec = time % 60;//秒
			var min = parseInt(time / 60) % 60;//分
			var hour = parseInt(time / 60 / 60) % 24;//小时
			var day = parseInt(time / 60 /60 / 24);//天数
//					console.log(day,hour,min,sec);
			//xx天xx时xx分xx秒   xx:xx:xx:xx
			return {
				secs : sec,
				mins : min,
				hours : hour,
				days : day
			}
		}

	
	// 限时购
	function move(){

	 	$('#leftbtn1').click(function(){
			var ulleft = $('#killlu').css('left').slice(0,-2);
			console.log(ulleft);

			if(ulleft >= 0){
				$('#killlu').css('left','0');
			}else{
				var movel = (ulleft * 1 + 220) + 'px';  
				$('#killlu').css('left',movel);
				console.log($('#killlu').css('left'));
			}
		
		})
		$('#rightbtn1').click(function(){
			var ulleft = $('#killlu').css('left').slice(0,-2);
			if(ulleft <= -2200){
				$('#killlu').css('left','-2200px');
			}else{
				var movel = (ulleft - 220) + 'px';  
				$('#killlu').css('left',movel);

			}
		
		});


		// 精选礼品盒
		$('#leftbtn2').click(function(){
			var ulleft = $('#jingxuanul').css('left').slice(0,-2);
			console.log(ulleft);

			if(ulleft >= 0){
				$('#jingxuanul').css('left','0');
			}else{
				var movel = (ulleft * 1 + 196) + 'px';  
				$('#jingxuanul').css('left',movel);
				console.log($('#jingxuanul').css('left'));
			}
		
		})
		$('#rightbtn2').click(function(){
			var ulleft = $('#jingxuanul').css('left').slice(0,-2);
			if(ulleft <= -1182){
				$('#jingxuanul').css('left','-1182px');
			}else{
				var movel = (ulleft - 197) + 'px';  
				$('#jingxuanul').css('left',movel);

			}
		
		});

	}
	
	move();


	// 楼层跳跃
	$(window).scroll(function(){
		var scrollTop = window.scrollY; //垂直方向的滚动距离
		if(scrollTop >= 500) {
			$('#right_bar').css('display','block');
		} else {
			$('#right_bar').css('display','none');
		}
		var windowScrollTop = $(window).scrollTop() + 5;
		console.log(windowScrollTop);
		if(windowScrollTop >= sxtop1 && windowScrollTop <= sxtop2 ){
			$('#shengxkill').css('background','#58bc58');
			$('#shengxkill').parent().siblings().children().css('background','#a7a7a7');
		}else if(windowScrollTop >= sxtop2 && windowScrollTop <= sxtop3){
			$('#tesgou').css('background','#58bc58');
			$('#tesgou').parent().siblings().children().css('background','#a7a7a7');
		}else if(windowScrollTop >= sxtop3 && windowScrollTop <= sxtop4){
			$('#shenlgsbtn').css('background','#58bc58');
			$('#shenlgsbtn').parent().siblings().children().css('background','#a7a7a7');
		}else if(windowScrollTop >= sxtop3 && windowScrollTop <= sxtop4){
			$('#jdsxbtn').css('background','#58bc58');
			$('#jdsxbtn').parent().siblings().children().css('background','#a7a7a7');
		}

	});
	//点击相关按钮，跳约到相关楼层
	//生鲜秒杀
	var sxtop1 = $('#timeshopping').offset().top;
	var sxtop2 = $('#featuregous').offset().top;
	var sxtop3 = $('#fresh_lime').offset().top;
	var sxtop4 = $('#jdshengxian').offset().top;
	$('#shengxkill').click(function(){
		$(window).scrollTop(sxtop1);
		$(this).css('background','#58bc58');
		$(this).parent().siblings().children().css('background','#a7a7a7');

	});
	//特色购
	$('#tesgou').click(function(){
		$(window).scrollTop(sxtop2);
		$(this).css('background','#58bc58')
		$(this).parent().siblings().children().css('background','#a7a7a7');
	});

	// 身临感受

	$('#shenlgsbtn').click(function(){
		$(window).scrollTop(sxtop3);
		$(this).css('background','#58bc58')
		$(this).parent().siblings().children().css('background','#a7a7a7');
	});
	// 京东生鲜 

	$('#jdsxbtn').click(function(){
		$(window).scrollTop(sxtop4);
		$(this).css('background','#58bc58');
		$(this).parent().siblings().children().css('background','#a7a7a7');

	});
	$('#totop').click(function(){
		$(window).scrollTop(0);
		// $(this).css('background','#58bc58')
		// $(this).parent().siblings().children().css('background','#a7a7a7');
	});
	$('#cartcar').click(function(){
		$(this).css('background','#58bc58')
		$(this).parent().siblings().children().css('background','#a7a7a7');
		window.open('html/cart.html');
	});
	
})(); 