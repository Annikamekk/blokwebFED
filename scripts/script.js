// JavaScript Document
console.log("hi");


var menuButton = document.querySelector("header > button");
var hetMenu = document.querySelector("nav");

menuButton.onclick = toggleMenu;

function toggleMenu() {
    menuButton.classList.toggle("open");
    hetMenu.classList.toggle("open");
}


var myImage = document.querySelector("section:nth-of-type(1) img");
var imageButton = document.querySelector("section:nth-of-type(1) button");

imageButton.onclick = toggleImage;

console.log(myImage);

function toggleImage(){
    myImage.classList.toggle("wissel");
    imageButton.classList.toggle("verander");
}



