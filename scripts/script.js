// JavaScript Document
console.log("hi");


var menuButton = document.querySelector("header > button");

menuButton.onclick = toggleMenu;

function toggleMenu() {
    menuButton.classList.toggle("open");
}

// // var hetMenu = document.querySelector("nav");

// // menuButton.onclick = toggle;


// // function toggle(){
// //   hetMenu.classList.toggle("open");
// // }

// var sluitButton = document.querySelector("nav button");

// sluitButton.onclick = closeMenu;

// function closeMenu(){
//   hetMenu.classList.remove("open");
// }