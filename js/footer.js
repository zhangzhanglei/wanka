$(".movie").on("mousedown", function() {
			$(this).css("color", "rgb(217,42,42)");
			$(".wenzi").css("color", "black");
			$(".line").css({
				"display": "block",
				"left": "12%"
			})
		})
		$(".wenzi").on("mousedown", function() {
		
			$(this).css("color", "rgb(217,42,42)");
			$(".movie").css("color", "black");
			$(".line").css({
				"display": "block",
				"left": "59%"
			})
		})
		$(".foot").each(function(i,ele){
			$(ele).on("mousedown",function(){
				
				if (i==0) {
//					$(this).children(":first").attr("src","img/首页/首页/Home.png");
					window.location.href="collection2.html"
					$(".imgone").attr("src","img/管理游戏2/Home.png");
					$(".imgtwo").attr("src","img/首页/Play.png");
					$(".imgthr").attr("src","img/首页/Tag.png");
					$(".imgfour").attr("src","img/首页/椭圆 17.png")
				}else if(i==1){
					$(this).children(":first").attr("src","img/首页/Play视频.png");
					$(".imgthr").attr("src","img/首页/Tag.png");
					$(".imgfour").attr("src","img/首页/椭圆 17.png");
					$(".imgone").attr("src","img/首页/Home.png")
				}else if(i==2){
					$(this).children(":first").attr("src","img/首页/Tag1.png");
					$(".imgfour").attr("src","img/首页/椭圆 17.png");
					$(".imgone").attr("src","img/首页/Home.png");
					$(".imgtwo").attr("src","img/首页/Play.png");
				}else if(i==3){
					$(this).children(":first").attr("src","img/首页/椭圆我的.png");
					$(".imgone").attr("src","img/首页/Home.png");
					$(".imgtwo").attr("src","img/首页/Play.png");
					$(".imgthr").attr("src","img/首页/Tag.png");
				}
				
			})
		});