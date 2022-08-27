for(var i = 0; i<document.querySelectorAll(".drum").length; i++)
{
  // when the letter is clicked upon
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {

    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

});

}
//when the letter is typed
document.addEventListener("keydown",function(event){ //event contains the key pressed as a variable
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(buttonLetter){

  switch (buttonLetter) {
    case "w":
       var audio = new Audio("sounds/tom-1.mp3");
       audio.play();
    break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;
    case "s":
       var audio = new Audio("sounds/tom-3.mp3");
       audio.play();
    break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;
    case "j":
       var audio = new Audio("sounds/snare.mp3");
       audio.play();
    break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;

    default: cosole.log(buttonLetter);

  }
}
function buttonAnimation(currentKey){

  var  animationKey = document.querySelector("."+ currentKey);
  animationKey.classList.add("pressed");

  setTimeout(function(){ //otherwise the animation stays forever
    animationKey.classList.remove("pressed");
  }
    ,100 //specifies the duration before the timeout
  )
}
