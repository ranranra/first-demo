$(function(){

	(function(){
		var aLi=$('#menu li');
		var oText=$('#search').find('.form .text');
		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		];
		var iNow=0;

		oText.val(arrText[iNow]);

		aLi.each(function(index){
			$(this).click(function(){
				aLi.attr('class','gradient');
				$(this).attr('class','active');
				iNow=index;
				oText.val(arrText[iNow]);
			})
		})

		oText.focus(function(){
			if($(this).val()==arrText[iNow]){
				$(this).val('');
			}
		})

		oText.blur(function(){
			if($(this).val()==''){
				oText.val(arrText[iNow]);
			}
		})
	})();

	(function(){
		var oDiv=$('.update');
		var oUl=oDiv.find('ul');
		var oBtnUp=$('#updateUp');
		var oBtnDown=$("#updateDown");
		var iH=0;
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];
		var str='';
		var iNow=0;
		var timer=null;

		for(var i=0;i<arrData.length;i++){
			str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'分钟前</span>写了一篇新文章: '+arrData[i].title+'</a></li>';
		}
		oUl.html(str);

		iH=oUl.find('li').height();

		oBtnUp.click(function(){
			doMove(-1);
		})
		oBtnDown.click(function(){
			doMove(1);
		})

		oDiv.hover(function(){
			clearInterval(timer);
		},autoPlay);

		function autoPlay(){
			timer=setInterval(function(){
				doMove(-1);
			},2000);
		}
		autoPlay();

		function doMove(num){
			iNow+=num;
			if(Math.abs(iNow)>arrData.length-1){
				iNow=0;
			}
			if(iNow>0){
				iNow=-(arrData.length-1);
			}
			oUl.stop().animate({'top':iH*iNow},1000);
		}
	})();

	/*(function(){
		var oOption1=$('#option1');
		var oNav=oOption1.find('.nav');
		var aLi1=oNav.find('li');
		var aCon=$('.con .tabCon1');
		aLi1.each(function(index){
			$(this).click(function(){
				aLi1.attr('class','gradient');
				$(this).attr('class','active');
				aCon.hide().eq(index).show();
			})
		})
	})()*/

	(function(){
		
		fnTab($('.tabNav1'),$('.tabCon1'),'click');
		fnTab($('.tabNav2'),$('.tabCon2'),'click');
		fnTab($('.tabNav3'),$('.tabCon3'),'mouseover');
		fnTab($('.tabNav4'),$('.tabCon4'),'mouseover');

		function fnTab(aNav,aCon,aEvent){
			var aElem=aNav.children();
			aCon.hide().eq(0).show();

			aElem.each(function(index){
				$(this).on(aEvent,function(){
					aElem.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');
					aElem.find('a').attr('class','triangle_down_gray');
					$(this).find('a').attr('class','triangle_down_red');

					aCon.hide().eq(index).show();
				})
			})
		}
	})();


	(function(){
		var oFade=$('#fade');
		var oUlli=oFade.find('ul li');
		var oOlli=oFade.find('ol li');
		var oP=oFade.find('p');
		var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
		var iNow=0;
		var timer=null;

		fnFade();

		oOlli.click(function(){
			iNow=$(this).index();
			fnFade();
		})

		oFade.hover(function(){
			clearInterval(timer);
		},autoPlay);

		autoPlay();
		function autoPlay(){
			timer=setInterval(function(){
				iNow++;
				iNow%=arr.length;
				fnFade();
			},1000)
		}

		function fnFade(){
			oUlli.each(function(i){
				if(i!=iNow){
					oUlli.eq(i).fadeOut().css('zindex','1');
					oOlli.eq(i).removeClass('active');
				}else{
					oUlli.eq(i).fadeIn().css('zindex','2');
					oOlli.eq(i).addClass('active');
				}
				oP.text(arr[iNow]);
			})
		}

	})();

	(function(){
		$('.bbs ol li').mouseover(function(){
			$('.bbs ol li').removeClass('active').eq($(this).index()).addClass('active');
		})
	})();

	(function(){
		var aSpan = $('.calendar h3 span');
		var aImg = $('.calendar .img');
		var oPrompt = $('.today_info');
		var oImg = oPrompt.find('img');
		var oStrong = oPrompt.find('strong');
		var oP = oPrompt.find('p');

		aImg.hover(function(){
			var iTop=$(this).parent().position().top-30;
			var iLeft=$(this).parent().position().left+50;
			var index = $(this).parent().index()%aSpan.size();

			oPrompt.show().css({"left":iLeft,"top":iTop});
			oP.text($(this).attr('info'));
			oImg.attr('src',$(this).attr('src'));
			oStrong.text( aSpan.eq(index).text() );
		},function(){
			oPrompt.hide();
		})
	})();
})