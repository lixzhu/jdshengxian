/*
 	表单验证的方法： 调用里面的子功能  (json对象里面有很多子功能)
 	var checkReg = {
 		tel : function() {}
 	}
 	
 	调用方法：
 	checkReg.tel();
 	
*/

var checkReg = {
	trim: function(str) { //去掉前后空格
		var reg = /^\s+|\s+$/g;
		return str.replace(reg, '');
	},
	tel: function(str) { //号码
		var reg = /^1[3-9]\d{9}$/
		return reg.test(str);
	},
	email: function(str) { //邮箱正则:a_a2-+.s @ a_a+2-.s  .s_a2
		var reg = /^\w+([\-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //网上推荐
		return reg.test(str);
	},
	idcard: function(str) { //身份证
		var reg = /^(\d{17}|\d{14})[\dX]$/;
		return reg.test(str);
	},
	psweasy: function(str) { //6-18位首字母开头
		var reg = /^[a-zA-Z]\w{5,17}$/;
		return reg.test(str);
	},
	pwwagain: function(str1, str2) { //确认密码
		return str1 === str2; //全等 恒等
	},
	urladr: function(str) { //路径：网址规则
		var reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
		return reg.test(str);
	},
	name: function(str) { //账号字母开头,6-20位
		var reg = /^[a-zA-Z][\w\-]{5,19}$/;
		return reg.test(str);
	},
	chinese: function(str) { //中文
		var reg = /^[\u2E80-\u9FFF]+$/;
		return reg.test(str);
	},
	birthday: function(str) { //生日
		var reg = /^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$/;
		return reg.test(str);
	}
}



// 设置cookie，获取cookie,移除cookie
function setCookie(key, val, iday) {
	//key:键名  val:键值  iday：失效时间
	//document.cookie = 'name=malin;expires=date;path=/';
	var now = new Date();
	now.setDate(now.getDate() + iday); //iday==5:5天后失效，-1：立即失效
	document.cookie = key + '=' + val + ';expires=' + now + ';path=/';
}

function getCookie(key) {
	var str = document.cookie; //name=malin; psw=123456
	var arr = str.split('; '); //[name=malin,psw=123456]
	for(var ele of arr) {
		var arr2 = ele.split('='); //[name,malin]
		if(key == arr2[0]) {
			return arr2[1];
		}
	}
}

function removeCookie(key) {
	setCookie(key, '', -1);
}


//获取样式的方法

function getStyle(ele, cls) {
	//ele节点  cls：属性名
	if(getComputedStyle(ele, false)) {
		//高级浏览器
		return getComputedStyle(ele, false)[cls];
	} else {
		//低版本的IE8-
		return ele.currentStyle[cls];
	}
}




/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

	clearInterval(obj.timer); //防止定时器叠加
	obj.timer = setInterval(function() {

		var istrue = true;

		//1.获取属性名，获取键名：属性名->初始值
		for(var key in json) { //key:键名   json[key] :键值
			//			console.log(key); //width heigth opacity
			var cur = 0; //存初始值

			if(key == 'opacity') { //初始值
				cur = getStyle(obj, key) * 100; //透明度
			} else {
				cur = parseInt(getStyle(obj, key)); // 300px  300  width heigth borderwidth px为单位的

			}

			//2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
			//距离越大，速度越大,下面的公式具备方向
			var speed = (json[key] - cur) / 6; //出现小数
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

			//保证上一个属性全部都达到目标值了
			if(cur != json[key]) { //width 200 heigth 400
				istrue = false; //如果没有达到目标值，开关false
			} else {
				istrue = true; //true true
			}

			//3、运动
			if(key == 'opacity') {
				obj.style.opacity = (cur + speed) / 100; //0-1
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
			} else {
				obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
			}

		}

		//4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
		if(istrue) { //如果为true,证明以上属性都达到目标值了
			clearInterval(obj.timer);
			if(fnend) { //可选参数的由来
				fnend();
			}
		}

	}, 30); //obj.timer 每个对象都有自己定时器

}







	/*
	 	插件：imgscroll()
	 	参数：
	 		* id : 最外层盒子的id
	 		* cle：焦点的高亮样式名
	 	日期：2019-4-17
	 	作者：强哥
	 	github:
	 	个人博客：阿里云url
	*/
	
function imgscroll(id,cls) {
	
	//找元素
	var box = document.getElementById(id);
	var imglist = box.children[0];
	var light = box.children[1]; //焦点
	var posibtn = box.children[2];
	var prevbtn = posibtn.children[0]; //上一张
	var nextbtn = posibtn.children[1]; //下一张
	var lis = imglist.getElementsByTagName('li');
	var iw = lis[0].offsetWidth;
	var now = 0; //存可视区的下标

	//1.图片放在右侧，第一个图放在可视区
	for(var li of lis) {
		li.style.left = iw + 'px';
	}
	lis[0].style.left = 0;

	//2.自动轮播
	var timer = null;
	timer = setInterval(next, 2000); //图片切换的间隔时间

	function next() {
		//旧图挪走
		startMove(lis[now], {
			'left': -iw
		}); //0

		//新图进入可视区  1
		now++;
		if(now >= lis.length) {
			now = 0;
		}
		lis[now].style.left = iw + 'px'; //快速把新图放在右侧
		startMove(lis[now], {
			'left': 0
		});
		lightmove(); //焦点跟随
	}

	function prev() {
		//旧图挪走:挪到右侧
		startMove(lis[now], {
			'left': iw
		});
		//新图进入可视区
		now--;
		if(now <= -1) { //临界值
			now = lis.length - 1;
		}
		lis[now].style.left = -iw + 'px';
		startMove(lis[now], {
			'left': 0
		});
		lightmove(); //焦点跟随
	}

	//3.点击左右按钮可以切换上下张

	//鼠标移入可视区就停止定时器，移出就继续运动
	box.onmouseover = function() {
		clearInterval(timer);
	}

	box.onmouseout = function() {
		timer = setInterval(next, 2000);
	}

	//另类需求：点击多次，两次点击的间隔时间太短，第二次点击无效

	//下一张
	var oldtime = new Date();
	nextbtn.onclick = function() {
		if(new Date() - oldtime > 800) {
			next();
		}
		oldtime = new Date();
	}

	//上一张
	prevbtn.onclick = function() {
		prev();
	}

	//3.焦点跟随
	//创建焦点
	var html = '';
	for(var i = 0; i < lis.length; i++) {
		html += '<span>' + '</span>';
	}
	light.innerHTML = html;
	light.children[0].className = cls;

	function lightmove() {
		//排他
		for(var i = 0; i < lis.length; i++) {
			light.children[i].className = '';
		}
		light.children[now].className = cls;
	}

	//4.点击焦点切换到对应的图片

	for(let i = 0; i < light.children.length; i++) {
		light.children[i].onclick = function() {
			//			console.log(i);
			if(i > now) {
				//新图从右边进入
				//旧图挪走
				startMove(lis[now], {
					'left': -iw
				});
				//新图进入可视区
				lis[i].style.left = iw + 'px'; //快速放在右侧
			}
			if(i < now) {
				//新图从左边进入
				//旧图挪走
				startMove(lis[now], {
					'left': iw
				});
				//新图进入可视区
				lis[i].style.left = -iw + 'px'; //快速放在左侧		
			}

			startMove(lis[i], {
				'left': 0
			});
			now = i; //新图变旧图
			lightmove();
		}
	}
}