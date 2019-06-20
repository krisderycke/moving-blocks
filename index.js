document.addEventListener("keydown", myMove);
document.addEventListener("keydown", eatFood);
window.addEventListener("load", mySpawn);

let animal = document.getElementById("animal");
let animalLeft = 0;
let animalTop = 0;
let food = document.getElementById("food");
let score = 0;

//keycodes are: left(37) right (39) up(38) down(40)
function myMove(e) {
  if (e.keyCode == 39) {
    //makes block go right
    animalLeft += 10;
    animal.style.left = animalLeft + "px";
    if (animalLeft >= window.innerWidth - 100) {
      //window.innerWidth takes the size of the current winow (aka reponsiveness)
      animalLeft -= 10; //makes block stay in place
      console.log("max right");
    }
  }

  if (e.keyCode == 37) {
    //makes block go left
    animalLeft -= 10;
    animal.style.left = animalLeft + "px";
    if (animalLeft <= 1) {
      animalLeft += 10;
      console.log("max left");
    }
  }

  if (e.keyCode == 40) {
    //makes block go down
    animalTop += 10;
    animal.style.top = animalTop + "px";
    if (animalTop >= window.innerHeight - 104) {
      animalTop -= 10;
      console.log("max bottom");
    }
  }

  if (e.keyCode == 38) {
    // makes block go up
    animalTop -= 10;
    animal.style.top = animalTop + "px";
    if (animalTop <= 1) {
      animalTop += 10;
      console.log("max top");
    }
  }
}

//make food div spawn on random location

function mySpawn() {
  food.style.display = "block";
  let maxWidth = window.innerWidth - food.offsetWidth;
  let maxHeight = window.innerHeight - food.offsetHeight;
  console.log(maxWidth, maxHeight);
  let randomWidth = Math.floor(Math.random() * maxWidth); //gedeeld door 5,maal 2: om een even getal uit te komen in stapjes van 10px
  let randomHeight = Math.floor(Math.random() * maxHeight);
  console.log("height" + randomHeight, "width" + randomWidth);
  food.style.left = randomWidth + "px";
  food.style.top = randomHeight + "px";
  console.log("poing");
}

//check if there is a collision, written better than the function below in comment
//as seen on : https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
function eatFood() {
  var sizeAnimal = animal.getBoundingClientRect();
  var sizeFood = food.getBoundingClientRect();
  var animalMeasures = {
    x: sizeAnimal.x,
    y: sizeAnimal.y,
    width: sizeAnimal.width,
    height: sizeAnimal.height
  };
  var foodMeasures = {
    x: sizeFood.x,
    y: sizeFood.y,
    width: sizeFood.width,
    height: sizeFood.height
  };

  if (
    animalMeasures.x < foodMeasures.x + foodMeasures.width && //foodX + foodWidt bepaalt het verste punt van het element
    animalMeasures.x + animalMeasures.width > foodMeasures.x &&
    animalMeasures.y < foodMeasures.y + foodMeasures.height &&
    animalMeasures.y + animalMeasures.height > foodMeasures.y
  ) {
    mySpawn();
    countScore();
  }

  function countScore() {
    score++;
    document.getElementById("score").innerHTML = score;
    console.log(score);
  }
}

// function eatFood() {
//   var sizeAnimal = animal.getBoundingClientRect();
//   var animalTop = sizeAnimal.top;
//   var animalBottom = sizeAnimal.bottom;
//   var animalLeft = sizeAnimal.left;
//   var animalRight = sizeAnimal.right;
//   console.log(
//     `animal ${animalTop} , ${animalRight}, ${animalBottom}, ${animalLeft} `
//   );

//   var sizeFood = food.getBoundingClientRect();
//   var foodTop = sizeFood.top;
//   var foodBottom = sizeFood.bottom;
//   var foodLeft = sizeFood.left;
//   var foodRight = sizeFood.right;
//   console.log(`${foodTop} , ${foodRight}, ${foodBottom}, ${foodLeft} `);

//   if (
//     animalLeft <= foodLeft &&
//     animalTop <= foodTop &&
//     animalRight >= foodRight &&
//     animalBottom >= foodBottom
//   ) {
//     mySpawn();
//
