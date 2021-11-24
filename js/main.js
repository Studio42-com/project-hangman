/*----- constants -----*/
const database = ["pug", "icon", "crate", "orange", "lobster", "pyromaniac"];

//Selects random word and calculates length.


/*----- app's state (variables) -----*/
// let scores, results, winner;
var random = database[Math.floor(Math.random() * database.length)];
    //this supports the random selections if I add/subtract array items without code modifications except to databse)
var randomArray = Array.from(random);
    var lettersArray = []; //this is just the display of "_"
    for (var i = 0; i < random.length; i++) {
      lettersArray[i] = "_";
    }
    var remainingLetters = random.length;




var guessedLetters; //array for letters guessed, display.
var winCounter; //if letters left and countdown = 0, declare win.
var loseCounter; //if = 6+1, game over.


//console.log(random,random.length);
// console.log(lettersArray, remainingLetters, random);


/*----- cached element references -----*/

/*----- event listeners -----*/
//button click listener.

init();

/*----- functions -----*/

 function init(){
    loseCounter = 6;
    winCounter = random.length;
    guessedLetters = "nothing yet";
    console.log(lettersArray, remainingLetters, random, loseCounter,winCounter,guessedLetters);
    render();
};

function getInputValue(){
    // Selecting the input element and get its value 
    var inputData = (document.getElementById("getInput").value).toLowerCase();
    
    
    // Displaying the value
    alert(inputData);
}



function render(){
    document.getElementById("guessWord").innerHTML = lettersArray; //remove the comas later.
    document.getElementById("showRandom").innerHTML = randomArray; //remove the comas later.

    document.getElementById("badGuesses").innerHTML = loseCounter;
    document.getElementById("remainingLetters").innerHTML = winCounter;
    document.getElementById("guessed").innerHTML = guessedLetters;

};