/*----- constants -----*/
const database = ["pug", "icon", "crate", "orange", "lobster", "pyromaniac"];

//Selects random word and calculates length.
var randomArray;
var lettersArray;
var remainingLetters;
var random; //randomly selected word
let guessedLetters =[]; //array for letters guessed, display.
let winCounter; //if letters left and countdown = 0, declare win.
let loseCounter; //if = 0, game over.

/*----- app's state (variables) -----*/
// let scores, results, winner;
function getRandom(database){
    random = database[Math.floor(Math.random() * database.length)];
    //this supports the random selections if I add/subtract array items without code modifications except to databse)
    randomArray = Array.from(random);
    lettersArray = []; //this is just the display of "_"
    winCounter = remainingLetters = random.length; //had to add value to variable
    for (var i = 0; i < random.length; i++) {
      lettersArray[i] = "_";
    }
//    remainingLetters = random.length;
};
    let inputData; //data from user input

//console.log(random,random.length);
// console.log(lettersArray, remainingLetters, random);

/*----- cached element references -----*/

/*----- event listeners -----*/
//button click listener.
//get input from text field and button.

//need a PLAY AGAIN button to invoke INIT.

//init();

/*----- functions -----*/

 function init(){
    getRandom(database);
    loseCounter = 6;
    winCounter = random.length;
    guessedLetters = [];
    //console.log(lettersArray, remainingLetters, random, loseCounter,winCounter,guessedLetters);
    
    render();
    console.log("I just ran INIT");
};

function getInputValue(){
    // Selecting the input element and get its value 
    inputData = (document.getElementById("getInput").value).toLowerCase();
       
    // Displaying the value
    alert(inputData);
    console.log("The Selected Letter is: ",inputData);
    gamePlay;
}

function gamePlay(randomArray,inputData){
    //get input from button click(inputData, randomArray, random)
    for (let i=0; i<randomArray.length; i++){
        if (inputData === randomArray[i]){
            return true;
        }
    
    };
    console.log("gamePlay results: ",gamePlay);

    //if letter is in chosen word array:
        //inject letter into successful guesses array at the index location.
                //would like this to work if same letter in word multiple times
        // subtract 1 from "letters remaining counter". If can do multiple letters, -1/letter
        // if remaining guesses =0, declare winner

    //if letter NOT in chosen word array:
        // -1 from bad guesses number
        // if bad guesses number = 0, declare "game over"
};

function render(){
    document.getElementById("guessWord").innerHTML = lettersArray; //remove the comas later.
    document.getElementById("showRandom").innerHTML = randomArray; //remove the comas later.

    document.getElementById("badGuesses").innerHTML = loseCounter;
    document.getElementById("remainingLetters").innerHTML = winCounter;
    document.getElementById("guessed").innerHTML = guessedLetters;
    console.log("I have run Render");

};