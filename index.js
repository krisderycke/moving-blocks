document.onkeydown = myMove;

let animal = document.getElementById("animal");
let animalLeft = 0;
let animalTop = 0;
let food = document.getElementById("food");
let foodLeft = 0;
let foodTop = 0;

//keycodes are: left(37) right (39) up(38) down(40)
function myMove(e) {
  if (e.keyCode == 39) {
    //makes block go right
    animalLeft += 5;
    animal.style.left = animalLeft + "px";
    if (animalLeft >= 1266) {
      animalLeft -= 5;
      console.log("max right");
    }
  }

  if (e.keyCode == 37) {
    //makes block go left
    animalLeft -= 5;
    animal.style.left = animalLeft + "px";
    if (animalLeft <= 1) {
      animalLeft += 5;
      console.log("max left");
    }
  }

  if (e.keyCode == 40) {
    //makes block go down
    animalTop += 5;
    animal.style.top = animalTop + "px";
    if (animalTop >= 525) {
      animalTop -= 5;
      console.log("max bottom");
    }
  }

  if (e.keyCode == 38) {
    // makes block go up
    animalTop -= 5;
    animal.style.top = animalTop + "px";
    if (animalTop <= 1) {
      animalTop += 5;
      console.log("max top");
    }
  }
}
