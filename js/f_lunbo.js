//轮播
var swiper = new Swiper('.swiper_lun .swiper-container',{
			//控制轮播图的滚动方向
			//水平
			direction:'horizontal',
            //竖直
//          direction:'vertical',
			
			//控制轮播图是否无限滚动.true循环,false不循环
			loop:true,
			//是否需要左右按钮
			//是否需要分页器
			pagination:".swiper-pagination",
			//是否开启自动播放
			autoplay:1000,
			autoplayDisableOnInteraction : false,
			//切换控制效果(cube fade overflow flip)
			effect:'overflow',
			//检测当前滑动到第几页
			
		});