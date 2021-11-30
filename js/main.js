/*----- constants -----*/
const database = ["pug", "icon", "crate", "orange", "lobster", "pyromaniac", "level"];

const image6 = "images/spacecraft.png";
const image5 = "images/5.jpg";
const image4 = "images/4.jpg";
const image3 = "images/3.jpg";
const image2 = "images/2.jpg";
const image1 = "images/1.jpg";
const image0 = "images/0.jpg";
const winImg = "images/rocketlaunch.png";

const lookup = {
    "6": image6,
    "5": image5,
    "4": image4,
    "3": image3,
    "2": image2,
    "1": image1,
    "0": image0
};


/*----- app's state (variables) -----*/
var randomArray; //the selected word converted to an array of single letters.
var lettersArray; //displays correctly guessed letters
var lettersArray2 = []; //displays correctly guessed letters, testing only.

var remainingLetters; //how many letters left, based on random.length.
var random; //randomly selected word
let guessedLetters = []; //array for letters guessed, display.
let guessedLetters2 = []; //array for letters guessed, display. testing only

let winCounter; //if letters left and countdown = 0, declare win.
let winCounter2 = 5; //if letters left and countdown = 0, declare win.

let loseCounter; //if = 0, game over.
let inputData; //data from user input.
let wordIndex;
let indexes = [];


//console.log(random,random.length);
// console.log(lettersArray, remainingLetters, random);

/*----- cached element references -----*/

/*----- event listeners -----*/
//document.querySelector('button').addEventListener('click', gamePlay); //adjust
//document.querySelector('button').addEventListener('click', init); //is working.

/*----- functions -----*/

function getRandom(database) { //select word, build arrays, determine letters count.
    random = database[Math.floor(Math.random() * database.length)];
    //this supports the random selections if I add/subtract array items without code modifications except to databse)
    randomArray = Array.from(random);
    lettersArray = []; //this is just the display of "_"
    lettersArray2 = []; //temp,testing
    winCounter = remainingLetters = random.length; //had to add value to variable
    for (var i = 0; i < random.length; i++) {
        lettersArray[i] = "_";
        lettersArray2[i] = "_"; //again, testing. Remove later
    }
};

function init() { //initialize and reset for new game.
    getRandom(database);
    loseCounter = 6;
    guessedLetters = [];
    wordIndex;

    render();
};

function getInputValue() {
    // Selecting the input element and get its value 
    inputData = (document.getElementById("getInput").value).toLowerCase();
    //Check for duplicates
    let dupCheck = guessedLetters.indexOf(inputData); {
        if (dupCheck > -1) {
            // alert("Select something else");
            document.getElementById("messages").innerHTML = "Select something else";
            getInput.value = "";
            return;
        }        //End duplicate checks        
    };
    gamePlay();
};
/* --gamePlay function --*/
function gamePlay() {
    wordIndex = randomArray.indexOf(inputData);
    getAllIndexes();
    {
        if (wordIndex > -1) {
            multiLetters();
 
            guessedLetters.push(inputData); //all guessed characters go into guessedLetters array.
            // so we can query if a character has been re-used.
            goodGuess();
            function goodGuess() {
                document.getElementById("messages").innerHTML = "Good Choice!";
                document.getElementById("messages").style.backgroundColor = "green";
            }
        } else {
            (loseCounter -= 1);
            guessedLetters.push(inputData);
            badGuess();
            function badGuess() {
                document.getElementById("messages").innerHTML = "You have chosen incorrectly";document.getElementById("messages").style.backgroundColor = "red";

            }
        }
        //guessedLetters.push(inputData); //possible new location

    }
    console.log("checking winner/loser");
    if (winCounter == 0) {
        document.getElementById("messages").innerHTML = "You Won!";
        document.getElementById("picture").innerHTML = `<img src="${winImg}" width=25% height=25% border=1>`;
        document.getElementById("guessWord").innerHTML = lettersArray.join(' ');
        document.getElementById("guessWord").style.backgroundColor = 'blue';
        return;
    }
    if (loseCounter == 0) {

        document.getElementById("messages").innerHTML = "That didn't end well....";
    }
    render();
};

/*-- End gamePlay function --*/ //use guestLetters2 for testing
function getAllIndexes() {
    for (let i = 0; i < randomArray.length; i++)
        if (randomArray[i] === inputData) {
            indexes.push(i)
        };
    console.log("Indexes: ", indexes);
}

function multiLetters() {
    for (let i = 0; i < indexes.length; i++) {
        lettersArray.splice(indexes[i], 1, inputData);
        (winCounter -= 1); //may need emergency removal
    }
    indexes.splice(0, indexes.length);
    ;
}

function render() {
     document.getElementById("guessWord").innerHTML = lettersArray.join(' ');
    document.getElementById("showRandom").innerHTML = randomArray; //remove the comas later,remove later.

    document.getElementById("badGuesses").innerHTML = loseCounter;
    document.getElementById("remainingLetters").innerHTML = winCounter;
    document.getElementById("guessed").innerHTML = guessedLetters;
    console.log("post-render report: Index: ", wordIndex, "WinCounter: ", winCounter, "LoseCounter: ", loseCounter);
    getInput.value = "";
    document.getElementById("picture").innerHTML = `<img src="${lookup[loseCounter]}" width=25% height=25% border=1>`;

};

