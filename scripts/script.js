// JavaScript Document
console.log("hi");


var menuButton = document.querySelector("header > button");
var hetMenu = document.querySelector("nav");

menuButton.onclick = toggleMenu;

function toggleMenu() {
    menuButton.classList.toggle("open");
    hetMenu.classList.toggle("open");
}



