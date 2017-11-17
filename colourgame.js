var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      reset();
    });
  }
}

function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
    //Add click listeners to squares.
    squares[i].addEventListener("click", function(){
      //Grab colour of clicked squares.
      var clickedColor = this.style.backgroundColor;
      //Compare colour to pickedColor.
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?"
      }
      else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numOfSquares);
  //Pick a new random colour from array.
  pickedColor = pickColor();
  //Change colorDisplay to match pickedColor.
  colorDisplay.textContent = pickedColor;
  //Change colours of squares.
  for(var i = 0; i < squares.length; i++){
    //Add colours to squares.
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  };
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colours";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  //Loop through all squares
  for(var i = 0; i < squares.length; i++){
    //Change each colour to match given colour
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  //Generating a random number for the colors array.
  var random = Math.floor(Math.random() * colors.length);
  //Returning the color.
  return colors[random];
}

function generateRandomColors(num){
  //Make an array.
  var arr = [];
  //Add num random colours to array
  for(var i = 0; i < num; i++){
    //Get random color and push into arr.
    arr.push(randomColor());
  }
  //Return That Array.
  return arr;
}

function randomColor(){
  //Pick a "red" from 0 - 255
  var red = Math.floor(Math.random() * 255);
  //Pick a "green" from - 255
  var green = Math.floor(Math.random() * 255);
  //Pick a "blue" from - 255
  var blue = Math.floor(Math.random() * 255);
  //Combine the strings
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
