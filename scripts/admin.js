function press(id){
	$('iframe').attr('src', "iframe/admin/"+id+".html")
	// changeHeight(document.querySelector('iframe'));
	//for dynamic size of sidebar
	// $('.menu').height($('.content').height() > $('.menu ul').height() ? $('.content').height() : $('.menu ul').height() + $('.menu > div').height() +15 )
	$('.menu li').removeClass('clicked');
	$("#"+id).addClass('clicked');
	$('.content h1').html($("#"+id).html());
	
}