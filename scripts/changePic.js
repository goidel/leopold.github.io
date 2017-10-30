
var image_tracker = 'rose1';

function change(){
	var image = document.getElementById('rose');
	
	if(image_tracker=='rose1'){
		image.src='images/rose2.jpg';
		image_tracker='rose2';
		document.body.style.backgroundColor = "ivory";
	}
	else{
		image.src='images/rose1.jpg';
		image_tracker='rose1';
		document.body.style.backgroundColor = "#ffe6ea";
	}
}
