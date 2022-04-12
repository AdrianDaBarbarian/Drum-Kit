// Listens for keys
window.addEventListener("keydown", function (event, ) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  // passes the event key "" into checks 
  checks(event.key)

  // passes the event key "" into checksAnimation 
  checksAnimation(event.key);
}, true);



//this changes the color of the ltters 

var numOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
    //sets the value of the current event's element's inner html which is a letter to clickInnerHTML
    var clickInnerHTML = this.innerHTML;

   // passes the letter into checks 
    checks(clickInnerHTML);

    // passes the letter into checksAnimation
    checksAnimation(clickInnerHTML);


  });

  
}


// function that checks which character matches to corresponding sound 
function checks(key) {
    
  switch (key) {
    case "w":
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play();

    break;

  case "a":
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play();

    break;

    case "s":
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play();

    break;

    case "d":
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play();

    break;
    
    case "j":
    var audio = new Audio("sounds/snare.mp3")
    audio.play();

    break;

    case "k":
    var audio = new Audio("sounds/crash.mp3")
    audio.play();

    break;

    case "l":
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play();

    break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

}


// function that adds and removes a class in css to make animation
function checksAnimation(keyInput) {

  // uses passed in input "" to query and add . that input and then sets it to activeEvent
  var activeEvent = document.querySelector("." + keyInput);

  // mends the class pressed into the queried element with corresponding class  
  activeEvent.classList.add("pressed");

  // sets the duration or how long after adding the class, it will be removed
  setTimeout(function() {
    activeEvent.classList.remove("pressed");
  }, 100);

}
