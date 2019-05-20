(function(){
	var datecon = decodeURI(location.search);
	var arr = datecon.split('?')
	    $.ajax({
			type : 'post',
			url : '../api/detailed.php',
			data : {
				gid : arr[1]
			},
			success : function(str){
				create(str);
			}
		});

//数据渲染
	var samllingarr = '';
	function create(str) {
	    var arr = JSON.parse(str);
		var samllingstr = arr[0].smalling;
		samllingarr = samllingstr.split('&');
		var sizestr = arr[0].size;
		var sizearr = sizestr.split('&');
		var html1 = arr.map(function(item){
			return `<div class="goodsdec">
					<div class="left fl">
						<div class="bigimg">
							<img src="../${item.bigimg}" alt="" class="tabbigimg">
							<div class="magnifier"></div>
						</div>
						<div class="saclbox">
							<img src="" alt="">
						</div>
						<div class="samllimg_list">
							<span class="leftbtn"><</span>
							<div class="visible fl">
								<ul>`
						}).join('');
		var html2 = samllingarr.map(function(item){
			return `<li>
						<img src="../${item}" alt="" class="tabsmallimg">
					</li>`
		}).join('');
		var html3 = arr.map(function(item){
			return `</ul>
						</div>
							<span class="rightbtn fl">></span>
						</div>
					</div>
					<div class="right fl">
						<div class="goods_title">
							<span class="fl shopnames" style="color:#000">${item.shopname}</span>                
							<p class="fl goodsxiangxi">${item.describei}</p>
						</div>
						<div class="SecKill">
							<div class="activename fl">
								<i></i>
								京东秒杀
							</div>
							<div class="times fr">
								
							</div>
						</div>
						<div class="price">
							<div class="killprice">
								<h4>秒杀价：</h4>
								<div class="money">￥${item.price}</div>
							</div>
						</div>
						<div class="weight">
							<h4 class="fl">重量：</h4>
							<div class="manyweight fl">1kg</div>
						</div>
						<div class="kind">
							<h4>选择种类</h4>
							<div class="goodskinds fl">`
		}).join('');

		var html4 = sizearr.map(function(item){
			return `<a href="###" class="selectsize">${item}</a>`
		}).join('');

		var html5 = arr.map(function(item){
			return `</div>
						</div>
						<div class="cart">
							<div class="numbox fl">
								<input type="text" value = "1">
								<div>
									<a href="###" class="add">+</a>
									<a href="###" class="reduce">-</a>
								</div>
							</div>
							<a href="####" class="join" data-gid = "${item.gid}">加入购物车</a>
						</div>
					</div>
					</div>`
		}).join('');


		$('#goodsdec').html(html1 + html2 + html3 + html4 + html5);
	}

//选项卡的制作
$('#goodsdec').on('click','.tabsmallimg',function(){
	var imgsrc = $(this).attr('src');

	$(this).css('border','1px solid red')
		   .parent()
		   .siblings()
		   .children()
		   .css('border','1px solid #fff');
	$(this).parent().parent().parent().parent().prev().prev().children(0).attr('src',imgsrc);
	$(this).parent().parent().parent().parent().prev().children(0).attr('src',imgsrc);
		   
});
//放大镜
$('#goodsdec').on('mouseenter','.bigimg',function(){
	$(this).magnifier();
	
});
// 数量加减
$('#goodsdec').on('click','.add',function(){
	var num = $(this).parent().prev().val();
	$(this).parent().prev().val(num * 1 + 1)
});
//减
$('#goodsdec').on('click','.reduce',function(){
	var num = $(this).parent().prev().val();
	if(num <= 1){
		$(this).parent().prev().val(1);
	}else{
		$(this).parent().prev().val(num * 1 - 1);
	}
});
//点击大小
var howsize = '';
$('#goodsdec').on('click','.selectsize',function(){
	howsize = $(this).text();
	$(this).css('border','1px solid red')
		   .siblings()
		   .css('border','1px solid #fff');

});

//加入购物车
if(getCookie('username')){
	$('#goodsdec').on('click','.join',function(){
		var username = getCookie('username');
		var gid = $(this).attr('data-gid');
		var much = $(this).prev().children(0).val();
		var describei = $(this).parent().parent().children(0).find('.goodsxiangxi').html();
		var shopname = $(this).parent().parent().children(0).find('.shopnames').html()
		var bigimg = $(this).parent().parent().prev().children(0).children(0).attr('src').slice(3);
		var price = $(this).parent().parent().find('.price').children(1).find('.money').html().slice(1);
		if(howsize){
			$.ajax({
				type : 'post',
				url : '../api/detailed.php',
				data : {
					gid : gid,
					usernames : username,
					much : much,
					describei :describei,
					bigimg : bigimg,
					howsize : howsize,
					shopname :shopname,
					price : price
				},
				success : function(str) {
					console.log(str);
					if(str == 'yes'){
						alert('成功加入购物车');
					}else{
						alert('加入购物车失败');
					}
				}
			});

		}else{
			alert('请选择种类类型');
		}

	});

}else{
	alert('请登录');
}

//点击购物车跳转购物车页面
$('#list_cart').click(function() {
	location.href = 'cart.html';
});

// // 点击左右按钮
// $('#goodsdec').on('click','.leftbtn',function(){
// 	var ulleft = $(this).next().eq(0).css('left').slice(0,-2);
// 	if(ulleft >= 42){
// 		$(this).next().eq(0).css('left','42px');
// 	}else{
// 		var movel = (ulleft * 1 + 52) + 'px';  
// 		 $(this).next().eq(0).css('left',movel);
// 	}

// });

// // $('#goodsdec').on('click','.rightbtn',function(){
// // 	var ulwidth = $(this).next().eq(0).children() * 52;
// // 	var ulleft = $(this).prev().eq(0).css('left').slice(0,-2);
// // 	var num = ulwidth - 262;
// // 	var ulW = num * 1 + 42 + 'px';
// // 	console.log($(this).next().eq(0));
// // 	if(ulleft <= num){
// // 		$(this).prev().eq(0).css('left','-42px');
// // 	}else{
// // 		var movel = (ulleft - 52) + 'px';  
// // 		$(this).prev().eq(0).css('left',movel);

// // 	}
// // 		console.log($(this).prev().eq(0).css('left'));
	
// });

})();