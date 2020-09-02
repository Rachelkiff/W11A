function makePurple(){
    document.body.style.background= "purple";
}
setTimeout(makePurple, 5000);

function makeBlue() {
    header.style.color= "Blue";
}
var header = document.getElementById("header");
header.addEventListener("click", makeBlue);

let bodyElement = document.getElementById("body");

bodyElement.addEventListener('keypress', function(eventDetails) {
    console.log(eventDetails);
    if(eventDetails.key == " ") {
        bodyElement.style.backgroundColor = "green";
    
    }
});

document.getElementById("Mousey").addEventListener("mouseover", mouseOver);

document.getElementById("Mousey").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("Mousey").style.color= "magenta";
}
function mouseOut() {
    document.getElementById("Mousey").style.color= "black";
}