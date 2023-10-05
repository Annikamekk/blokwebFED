var myImage = document.querySelector("section:nth-of-type(1) img");
var imageButton = document.querySelector("section:nth-of-type(1) button");

imageButton.onclick = toggleImage;

console.log(myImage);

function toggleImage(){
    myImage.classList.toggle("wissel");
    document.documentElement.classList.toggle("verander");

}
