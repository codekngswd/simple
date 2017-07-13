var width = window.innerWidth;
var height = window.innerHeight;

if (width > 414 || height > 768) {
	window.location = "alternate.html";	
} else {
	window.location = "mobile.html";
}