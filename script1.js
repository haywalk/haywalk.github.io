//Slideshow from dev.html//

var Image = new Array(
"https://i.imgur.com/AAGsqey.jpg","https://i.imgur.com/UpsQjLq.jpg",
"https://i.imgur.com/0wDojgZ.jpg", "http://imgur.com/v8Cu4A4.jpg",
"https://i.imgur.com/DksTHnN.png",
"https://i.imgur.com/KnrQQ0c.jpg"
)

var imageNumber = 0;
var imageLength = Image.length - 1;

function changeImage(num){
	
	imageNumber = imageNumber + num;
	
	if(imageNumber > imageLength){
		imageNumber = 0;
	}
	
	if(imageNumber < 0){
		imageNumber = 3;
	}
	
	document.slideshow.src= Image[imageNumber]

	return false;
}
