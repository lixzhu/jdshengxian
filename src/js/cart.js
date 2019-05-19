$(function() {
	//数据请求
    var getUserName = getCookie('username');
	$.ajax({
    	type : 'post',
    	url : '../api/cart.php',
        data : 'getname=' + getUserName,
    	success : function(str) {
        	// console.log(str);
        	create(str);
   	 }
	});
	function create(str) {
    	var date = JSON.parse(str);
    	console.log(date)
    	var html = date.map(function(item){
            return ` <div class="everyshop">
                    <div class="shoptitle">
                        <input type="checkbox" value="">
                        <span>
                            <a href="###" class="shopname">${item.shopname}</a>
                            <a href="###">
                                <i></i>
                            </a>
                        </span>
                    </div>
                    <div class="shopgoods">
                        <!-- 商店的头部 -->
                        <div class="goodshead">
                            
                        </div>
                        <div class="goodsitems">
                        	<div class="good_check">
                            	<input class="goodsinput" type="checkbox">
                            </div>
                            <div class="itemscon">
                                <div class="pgoods fl">
                                    <div class="goodsimg fl">
                                        <img src="../${item.bigimg}" alt="">
                                    </div>
                                    <div class="goodsderi fl">
                                        <i></i>
                                        <a class="goodssay" href="">${item.describei}</a>

                                    </div>
                                </div>
                                <div class="goodstxt fl">
                                    
                                </div>
                                <div class="goodsprice fl">
                                    <span>${item.price}</span>
                                </div>
                                <div class="goodsnum fl">
                                    <input class="rednum fl" type="text" value="-">
                                    <input class="fl many" type="text" value="${item.num}" data-num="${item.inventory}">
                                    <input class="addnum fl" type="text" value="+">
                                </div>
                                <div class="goodssum fl">
                                    <span>${item.price * item.num}</span>
                                </div>
                                <div class="delgoods fl">
                                    <a href="####" class="good_del" data-gid="${item.gid}">移除</a>
                                </div>
                            </div>
                            <div class="itemskong"></div>
                        </div>
                    </div>
                </div>`
    	}).join('');


        $('#cartBox').html(html);

    }
   
	//事件委托写法
	$('#cartBox').on('click', '.addnum', function() {
		var num = $(this).prev().val();
		var kucun = $(this).prev().data('num');
		// console.log($(this));
		num++;
		//上限：库存量
		if(num >= kucun) {
			num = kucun;
		}
		$(this).prev().val(num);
		total($(this));
	});

	$('#cartBox').on('click', '.rednum', function() {
		var num = $(this).next().val();
		num--;
		//上限：库存量
		if(num <= 1) {
			num = 1;
		}
		$(this).next().val(num);
		total($(this));
	});

	//手动输入改变数量
	$('#cartBox').on('input', '.many', function() {
		var num = $(this).val();
		var kuncun = $(this).data('num');
		if(num <= 1) {
			num = 1;
		} else if(num >= kuncun) {
			num = kuncun;
		}
		$(this).val(num);
		total($(this));
	});

	//小计
	function total(now) {
		//找数量
		var num = $(now).parent().find('.many').val();
		//找单价
		var price = $(now).parent().prev().text();
		// console.log($(now).parent().prev().next());
		//小计=数量 * 单价
		var xiaoji = (num * price).toFixed(2);
				// console.log(num,price,xiaoji);
		$(now).parent().next().html('￥ ' + xiaoji);
		all();

	}
	// //判断购物车商店是否没有商品
	// function somegoods() {
	// 	if(                                      ) {
	// 		console.log(345);
	// 		$('.goodshead').parent().parent().remove();
	// 	}
	// }

	//删除当行
	$('#cartBox').on('click', '.good_del', function() {
		//		console.log(888);
		var gidvalue = $(this).data('gid');
		var dis = $(this);
		var res = confirm('您确定要删除吗？');
		if(res) {
		console.log(getUserName);
			$.ajax({
				type:"post",
				url:"../api/cart.php",
				data : 'gid=' + gidvalue + '&getname=' + getUserName,
				success : function(str) {
					console.log(str);
					if(str){
						dis.parent().parent().parent().parent().parent().remove();		
					}
				}
			});
			console.log($(this).parent().parent().parent().parent().parent());
		}
		update();
	});

	//是否应该保留最后一行：如果没有商品了，就隐藏这行(算总价和总数量的)
	function update() {
		var len = $('#cartBox .addnum').size();
		if(len == 0) {
			//没有商品了
			$('.barfoot').hide();
		}
	}

	//全选
	$('.allcheck input').click(function() {
		var isok = $('.allcheck input').prop('checked');
		$('.shoptitle input').prop('checked', isok);
		$('.shoptitle input').parent().next().find('.goodsinput').prop('checked', isok);
		all();
		// xuan(this2)
	});
	//店铺的全选
		$('#cartBox').on('click','.shoptitle input',function() {
			var isok = $(this).prop('checked');
			$(this).parent().next().find('.goodsinput').prop('checked', isok);
			all();
		});
			
	//计算总数量和总价格
	var arr = [];

	function all() {

		$('.good_check input').each(function(i, item) {
			if($(item).prop('checked')) {
				//这一行被勾选，把的下标存到数组里面
				arr.push(i);

			}
		});

		//求总数量
		var num = 0;
		var price = 0;
		arr.forEach(function(item) { //0 1 
			num += $('.many').eq(item).val() * 1;
			price += $('.goodssum').eq(item).text().slice(2) * 1;
			console.log(num,price);
		});

		//		console.log(num,price.toFixed(2));

		//渲染
		$('.shuliang').html(num);
		$('.totalsum').html('￥' + price.toFixed(2));
		arr = []; //数组用完就清空
	}

	//点击复选框控制全选
	$('#cartBox').on('click', '.shoptitle input', function() {
		var len = $('.shoptitle input:checked').size();
		var total = $('.shoptitle input').size();
		if(len == total) {
			//证明全部勾选了
			$('.allcheck input').prop('checked', true);
		} else {
			$('.allcheck input').prop('checked', false);
		}
		all(); //刷新总数量和总价格
	});

	//全删
	$('#delall').click(function() {
		var newarr = [];
		$('.good_check input').each(function(i, item) {
			if($(item).prop('checked')) {
				//这一行被勾选，把的下标存到数组里面
				newarr.push(i);

			}
		});

		console.log(newarr);

		//删掉多行
		var res = confirm('您确定要全删吗？');
		if(res) {
			for(var i = newarr.length - 1; i >= 0; i--) {
				$('.shopgoods').eq(newarr[i]).remove();
			}

			//刷新价格
			all();
			update();
		}

	});

	$('#jiesuan').click(function(){
		alert('回家收快递吧，东东帮你付款了');
	});

});