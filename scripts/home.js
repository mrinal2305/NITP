

var images = new Array(
	"images/senate_2018.jpg",
	"images/President_Kovindji.jpg",
	"images/DSC_0035.jpg",
	"images/DSC_0041.jpg",
	"images/DSC_0108.jpg",
	"images/DSC_0135.jpg",
	);
var size = images.length;
// for(var i=0;i<size;){
// 	setTimeout(function(){
// 		
// 		i = (i+1)%size;
// 	}, 2000);
	
// }

function changeImage(pos){
	var slideShow = document.querySelector(".slideshow img");
	slideShow.setAttribute("src",images[pos]);
	slideShow.setAttribute("alt",images[pos]);
}

var pos = 0;
setInterval(function(){
	//clog("setInterval started");
	pos = (pos+1)%size;
	fadeOut(document.querySelector(".slideshow img"));
	//clog(" faded out");

	//change image after 1 sec- time of fadeout
	setTimeout(function(){
		changeImage(pos);
		//clog("image changed");
		fadeIn(document.querySelector(".slideshow img"));
	},1000);
	
	
	
},5000);


//fadeIn(document.querySelector(".check"));
fadeOut(document.querySelector(".check"));

// var opacity;
function fadeIn(element){
	var opacity = element.style.opacity = 0.1;
	
	var fadeInt = setInterval(function(){
		if(opacity>=0.99){
			clearInterval(fadeInt);
		}
		else{
			opacity+= 0.01;
			element.style.opacity = opacity;
			//console.log(opacity);
		}
		
	}, 10);
	
}

function fadeOut(element){
	var opacity = element.style.opacity = 1;
	var fadeInt = setInterval(function(){
		if(opacity <= 0.1){
			clearInterval(fadeInt);
		}
		else{
			opacity -= 0.01;
			element.style.opacity = opacity;
			//console.log(opacity);
		}
		
	}, 10);
}




function clog(str){
	console.log(str);
}






