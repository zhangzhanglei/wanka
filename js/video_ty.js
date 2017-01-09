
$(document).on('touchstart','.CHL_vtyz3dhlli',function () {
	$('#CHL_vtyz3line').animate({
			left:$('.CHL_vtyz3dhlli').width()*$(this).index()
				},200)
	$('.CHL_vtyz3dhlli a').css('color','black')
	$(this).children('a').css('color','red')
    var mm =$(this).index();	
    $(".CHL_vtyz3lbul li").css('opacity','0')
	$(".CHL_vtyz3lbul li:eq("+mm+")").css('opacity','1')
	
})


$(document).on('touchstart','.CHL_scsgzcontent2',function () {
	//查看更多礼包消失
	$('.CHL_scsgzcontent2').css('display','none');
	//九宫格消失,八个图标出现
	$('.CHL_vtyz2').css('display','none');
	$('.CHL_vtyz3').css('display','block')
})