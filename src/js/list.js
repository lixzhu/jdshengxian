
//分页

$(function(){$(".pageDiv").createPage({
    pageCount:6,//总页数
    current:1,//当前页
    turndown:'true',//是否显示跳转框，显示为true，不现实为false,一定记得加上引号...
    backFn:function(p){
    	yenum = p;
    	console.log(p);

    }
});
})

//数据渲染
function init(page) {
	var num = 15;//一页渲染15条数据
	$.ajax({
		type : 'post',
		url : '../api/list.php',
		data : {
			page : page,//页数
			pagenum : num,//一页num条数据
		},
		success : function(str) {
			create(str);
		}
	});
}

init(1);

//渲染页面
function create(str){
	var arr = JSON.parse(str);//字符串转数组
	var html = arr.map(function(item) {
		return `<div class="listgoods" data-gid="${item.gid}">
					<div class="imgbox">
						<img src="../${item.bigimg}" alt="">
					</div>
					<div class="money">
						￥${item.price}
					</div>
					<div class="goodsdec">
						${item.describe}
					</div>
					<div class="saying">
						${item.assess}万+条评论
					</div>
					<div class="shop">
						${item.shopname}
					</div>
					<div class="icon"></div>
					<div class="other">
						<a href="###" class="contrast">对比</a>
						<a href="###" class="follow">关注</a>
						<a href="###" class="jioncart">
							<i class="iconfont icon-cart"></i>
							加入购物车
						</a>
					</div>
					</div>`
	}).join('');
	$('.goodsbig').html(html);
}

//筛选 品牌和选择
$('#select').on('click','.frbrand', function(){
	var what = $(this).text();
	$.ajax({
		type : 'post',
		url : '../api/list.php',
		data : {
			what : what  //筛选内容
		},
		success : function(str) {
			create(str);
		}
	});
});

//重量
$('#select').on('click','.frsize', function(){
	var what = $(this).text();
	$.ajax({
		type : 'post',
		url : '../api/list.php',
		data : {
			size : what  //筛选内容
		},
		success : function(str) {
			create(str);
		}
	});
});
// 价格
$('.goodssort').on('click','.price', function(){
	var oneVal = $('.textone').val();
	var twoVal = $('.texttwo').val();
		console.log(oneVal,twoVal);
	if(oneVal != '' && twoVal !=''){
		$.ajax({
			type : 'post',
			url : '../api/list.php',
			data : {
				onenum : oneVal,
				twonum : twoVal  
			},
			success : function(str) {
				console.log(str);
				create(str);
			}
		});

	}else{
		alert('请填写完整价格');
	}
});
//评价
var isok = true;
$('.assess').click(function(){
	var order = '';
	if(isok){
		order = 'ASC';
	}else{
		order = 'DESC';
	}
	$.ajax({
		type : 'post',
		url : '../api/list.php',
		async : false,
		data : {
			assess : order  //筛选内容
		},
		success : function(str) {
			create(str);
		}
	});
	isok =! isok;

});

// 点击搜索按钮
$('.searchbtn').click(function(){
	var some = $('.searchtext').val();
	$.ajax({
		type : 'post',
		url : '../api/list.php',
		async : false,
		data : {
			somes : some  //筛选内容
		},
		success : function(str) {
			create(str);
		}
	});
});

//点击商品跳转到详情页
$('#goodsbig').on('click','.listgoods',function(){
	var gid = $(this).attr('data-gid');
	console.log(gid);
	location.href = 'detailed.html?' + gid;
	
});