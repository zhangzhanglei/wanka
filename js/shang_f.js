var swiper = new Swiper('.CHL_scmove .swiper-container',{
			//控制轮播图的滚动方向
			//水平
			direction:'horizontal',
			slidesPerView:3.8,
			//切换控制效果(cube fade overflow flip)
			effect:'overflow',
			simulateTouch : false,

		});
		
		
$(".CHL_scmi1").on("click",function(e){	
	var even = e || event
//				even.preventDefault();
				even.stopPropagation();
	$('.CHL_scmove').css('display','none')
	$('.CHL_scsgz').css('display','block')	
	$('.CHL_scsgzstr').html($(this).children('.CHL_scmi1sp').children('span').html())
$('.CHL_scsgzimg img').attr('src',$(this).children('.CHL_scmi1img').children('img').attr('src'))
})



$('.CHL_scsgzimg img').on('touchstart',function (event) {

				event.preventDefault();
				event.stopPropagation();
	$('.CHL_scmove').css('display','block')
	$('.CHL_scsgz').css('display','none')	
})















//var CHl = document.querySelectorAll(".CHL_scmi1");



//$(document).on('touchstart','.CHL_scmi1',function () {
//	$('.CHL_scmove').css('display','none')
//	$('.CHL_scsgz').css('display','block')	
//	$('.CHL_scsgzstr').html($(this).children('.CHL_scmi1sp').children('span').html())
//$('.CHL_scsgzimg img').attr('src',$(this).children('.CHL_scmi1img').children('img').attr('src'))
//
//
//})


//
//$('.swiper-slide').on('touchstart',function () {
//	console.log($(this).children('img').attr('src'))
//})