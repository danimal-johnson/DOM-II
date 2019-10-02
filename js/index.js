// Your code goes here

const navLinks = document.querySelector(".nav");
navLinks.addEventListener( "click", (e) => {
    e.preventDefault();
    console.log("Prevention is best");
});



const busPic = document.querySelector(".intro img");
busPic.style.draggable = true;

// Note: you have to NAME the anonymous function to remove it.
busPic.addEventListener("drag", function _listener (e) {
    e.target.removeEventListener("drag" , _listener);
    draggedOnce = true;
    alert("Busses are such a drag.\n\n(Where did you think you were going with that?)");
    
});


const signUpButton = document.querySelector(".btn");    // First one only
const signUpButtons = document.querySelectorAll(".btn");

signUpButton.addEventListener("mouseenter", (e) => {
    // console.log ("Doing the thing.");
    e.target.style.display = "none";
});


signUpButton.addEventListener("mouseleave", (e) => {
    signUpButton.style.border = "1px solid grey";
    e.target.style.backgroundColor = "red";
});


signUpButtons[1].addEventListener("mouseover", (e) => {
    // console.log ("Second button?");
});



// Event: Clicking on the generic map allows the treasure map to be shown.
// --- Now called only after rotating canal image ---
const mapImage = document.querySelector(".content-section .img-content img");
// mapImage.addEventListener("click", (e) => {
//     let mapImage = "img/treasure.png";
//    e.target.src = mapImage;
// });


let imageIsRotatable = false;
// Event: Using the 'a' and 'd' keys rotate the image
let canalAngle = 0;
const aKey = 65;
const dKey = 68;
const canalImage = document.querySelectorAll(".content-section .img-content img")[1];
document.addEventListener("keydown", (e) => { 
    // console.log("Rotating " + canalAngle + ". Can you tell?");
    if (imageIsRotatable) {
        if (e.keyCode === dKey) { // rotate right
            canalAngle += 90;
            canalImage.style.transform = `rotate(${canalAngle}deg)`;
        }
        if (e.keyCode === aKey) { // rotate left
            canalAngle -= 90;
            canalImage.style.transform = `rotate(${canalAngle}deg)`; 
        }

        if (canalAngle >= 360 || canalAngle <= -360) {
            canalImage.style.border = "8px solid green";
            mapImage.addEventListener("click", (e) => {
                let mapImage = "img/treasure.png";
                e.target.src = mapImage;
            })
        }
    }
});


// Event listener disables context menu over the treasure map.
// (Effectively preventing the visitor from saving it.)
mapImage.addEventListener("contextmenu", (e) => {
    console.log ("Preventing an interactive map.");
    alert("You can't download a treasure map. You need to memorize it.");
    e.preventDefault();
    return false;
});

// const endOfPage = document.container;
// endOfPage.addEventListener("scrolledToBottom", (e) => {
//     if (myDiv.offsetHeight + myDiv.scrollTop >= myDiv.scrollHeight) {
//       // scrolledToBottom(e);
//       console.log ("Scrolled to bottom");
//     }
//   });

const titleH1 = document.querySelector("h1");


// Not an event at the moment, but solves the problem.
// Adds an event listener for a doubleclick at the top H1.
window.onscroll = function() {
    if ((window.innerHeight + window.pageYOffset) >=
            document.body.offsetHeight) {
            
            titleH1.innerText = "Hidden Treasure";
            titleH1.style.cursor = "pointer";
            titleH1.addEventListener("dblclick", (e) => {
                titleH1.style.border = "3px solid green";
                imageIsRotatable = true;
        });
    }
};
