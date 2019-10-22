
window.onload = function(){
	var url = document.location.href;
	id = url.split('?')[1].split('=')[1];//containes id of button to be clicked
	press(id);
}



$('.menu li').click(function(event){
	// console.log(this.getAttribute('id'));
	press(this.getAttribute('id'));
});

$('.menu .expnd-btn img').click(function(){
	$('.menu ul').slideToggle();
});


// changing height of iframe to its content
function changeHeight(iframe){
	iframe.height = 0;//it seems like foolish but very necessary
	iframe.height = iframe.contentWindow.document.body.scrollHeight + 30;
}

// controlling navigation bar for mobile
$('.mob.header .menu-img').click(function(){
	var mleft = $('nav').css('margin-left');
	console.log(typeof mleft);
	if(mleft.charAt(0) == '-'){
		mleft=0;
	}
	else{
		mleft="-75%";
	}
	console.log(mleft);
	$('nav').animate({"margin-left": mleft});
});

$('nav').ready(function(){
	$('nav > ul > li').click(function(event){
		// console.log(event);
		$(event.currentTarget).toggleClass('expanded');
	});
});
