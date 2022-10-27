//detecting button press

var drumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < drumButtons; i++){ //.drum implies the specific class we're targeting.
   document.querySelectorAll(".drum")[i] .addEventListener("click",handleClick);//we want our button to trigger this function when it receives a click.event listener listens for when it gets clicked and when it does, it should call the function handleClick.

   function handleClick(){// why are we not using () when calling the fn in event listener?? parentheses imply straight up method call ...hence the fn gets called before clicking the button
      var buttonInnerHTML = this.innerHTML;       //the idea of passing a fn as an input so that it can be called at a later time.....!!!important in JS..
   
   
      makeSound(buttonInnerHTML);
   
      buttonAnimation(buttonInnerHTML);

   }

   //what to do when a click is detected.
}

//detecting keyboard press
document.addEventListener("keydown",function(event){

   makeSound(event.key);

   buttonAnimation(event.key);
});


//anonymous fn : fn without a name!!!
function makeSound(key){
   switch (key) {
      case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
         break;
   
      case "a":
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play(); 
         break;

      case "s":
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play(); 
         break;

      case "d":
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play(); 
         break;

      case "j":
         var crash = new Audio("sounds/crash.mp3");
         crash.play(); 
         break;

      case "k":
         var kickbass = new Audio("sounds/kick-bass.mp3");
         kickbass.play(); 
         break;

       case "l":
         var snare = new Audio("sounds/snare.mp3");
         snare.play(); 
         break;


         default: console.log(key);
   }
}

function buttonAnimation(currentKey){

   var activeButton = document.querySelector("." + currentKey);
 
   activeButton.classList.add("pressed");
 
   setTimeout(function() {
     activeButton.classList.remove("pressed");
   }, 100);
  }
 