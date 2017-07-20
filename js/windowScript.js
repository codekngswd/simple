/* Author: LeQuan Ly
   Copyright: (C) 2017 codekngswd
   
   Window JavaScript file */

var width = window.innerWidth;
var height = window.innerHeight;

if (width > 414 || height > 768) {
	window.location = "desktop.html";	
} else {
	window.location = "mobile.html";
}