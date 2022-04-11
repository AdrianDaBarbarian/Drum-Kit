

function checks(x) {
    
 

  switch (x) {
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

  // Cancel the default action to avoid it being handled twice

}

window.addEventListener("keydown", function (event, ) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  checks(event.key)
  console.log(event.key)
}, true);



//this changes the color of the ltters 

var numOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function ()
  {
    this.style.transform = "scale(1.5)";
      this.style.transition = "transform 0.25s ease";
    this.style.color = "white";
    
    console.log(this.innerHTML);
    
    checks(this.innerHTML)

  });

  document.querySelectorAll(".drum")[i].addEventListener("mouseout", function ()
  {
    this.style.transform = "scale(1)";
        this.style.transition = "transform 0.25s ease";
    this.style.color = "#DA0463";
    
  });

  
}
