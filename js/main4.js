/*----- constants -----*/
const database = ["pug", "icon", "crate", "orange", "lobster", "pyromaniac"];

/*----- app's state (variables) -----*/
var randomArray; //the selected word converted to an array of single letters.
var lettersArray; //displays correctly guessed letters
var remainingLetters; //how many letters left, based on random.length.
var random; //randomly selected word
let guessedLetters =[]; //array for letters guessed, display.
let winCounter; //if letters left and countdown = 0, declare win.
let loseCounter; //if = 0, game over.
let inputData; //data from user input.
let wordIndex;


//console.log(random,random.length);
// console.log(lettersArray, remainingLetters, random);

/*----- cached element references -----*/

/*----- event listeners -----*/
//document.querySelector('button').addEventListener('click', gamePlay); //adjust
//document.querySelector('button').addEventListener('click', init); //is working.

/*----- functions -----*/

function getRandom(database){ //select word, build arrays, determine letters count.
    random = database[Math.floor(Math.random() * database.length)];
    //this supports the random selections if I add/subtract array items without code modifications except to databse)
    randomArray = Array.from(random);
    lettersArray = []; //this is just the display of "_"
    winCounter = remainingLetters = random.length; //had to add value to variable
    for (var i = 0; i < random.length; i++) {
      lettersArray[i] = "_";
    }
    console.log("Randomization Complete");
};

 function init(){ //initialize and reset for new game.
    getRandom(database);
    loseCounter = 6;
//    winCounter = random.length;
    guessedLetters = [];
    wordIndex;
    //console.log(lettersArray, remainingLetters, random, loseCounter,winCounter,guessedLetters);
    console.log("I just ran INIT");
    render();
    
};

function getInputValue(){
    // Selecting the input element and get its value 
    inputData = (document.getElementById("getInput").value).toLowerCase();
       
    // Displaying the value
    alert(inputData);
    console.log("The Selected Letter is: ",inputData);
    console.log("Completed getting user input");
    gamePlay();
    console.log("preparing to run gamePlay");   
};
/* --gamePlay function --*/
//function gamePlay(randomArray,lettersArray, guessedLetters, winCounter, loseCounter, inputData);
function gamePlay() {
    console.log("Starting gamePlay function");
    wordIndex = randomArray.indexOf(inputData); {
    if (wordIndex > -1) {
        (winCounter -= 1);
        console.log("winCounter should be less 1")
        lettersArray.splice(wordIndex,1,inputData);
        function goodGuess(){
            alert ("Good Letter choice!");
            }
            } else {
                (loseCounter -=1);
                console.log("loseCounter should be less 1")
                guessedLetters.push(inputData);
                function badGuess(){
                    alert ("You have chosen incorrectly");
                    }

                }
    }
console.log("Index: ",wordIndex, "WinCounter: ",winCounter, "LoseCounter: ",loseCounter);
console.log("Valid Letters :", lettersArray)
console.log("Bad letters: ", guessedLetters);
console.log("gamePlay Function has completed.");
    render();
};

/*-- End gamePlay function --*/

function render(){
    console.log("pre-render report: Index: ",wordIndex, "WinCounter: ",winCounter, "LoseCounter: ",loseCounter);
    document.getElementById("guessWord").innerHTML = lettersArray; //remove the comas later.
    document.getElementById("showRandom").innerHTML = randomArray; //remove the comas later,remove later.

    document.getElementById("badGuesses").innerHTML = loseCounter;
    document.getElementById("remainingLetters").innerHTML = winCounter;
    document.getElementById("guessed").innerHTML = guessedLetters;
    console.log("post-render report: Index: ",wordIndex, "WinCounter: ",winCounter, "LoseCounter: ",loseCounter);
    console.log("I have run Render");
};