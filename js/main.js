/*----- constants -----*/
const database = ["pug", "icon", "crate", "orange", "lobster", "pyromaniac", "level", "microphone", "diabolo", "yoyo", "begleri", "astrojax", "spintop", "koma", "chonkakegoma", "juggling", "console", "shutter", "pound", "phenom", "phenomizm", "superstar","gauntlet","strix","horizon","flight", "northstar", "popstar", "fiesta","gnarwal","chief","marvel", "anglam", "jetset","sleipnir","elysian", "shibari","diamondback", "modified", "wing", "butterfly", "responsive", "unresponsive", "bearing", "string", "counter-weight", "1to1", "boomerang", "modem", "multiplexer", "concentrator", "router", "switch", "hub", "cabinent", "capacitor", "cone", "transformer", "cabinet", "array", "point-source", "compressor", "limiter", "gate", "preamp", "tube", "dynamic", "ribbon", "condenser", "resistor", "solder", "digital", "analog", "workstation", "panel", "cariod", "super-cardiod", "hyper-cardiod", "omnidirectional", "figure-8", "monitor", "wedge", "side-fill", "engineer", "ethernet", "coax", "fiber", "headphones", "cans", "victoria"];


const image6 = "images/spacecraft.png";
const image5 = "images/5.png";
const image4 = "images/4.png";
const image3 = "images/3.png";
const image2 = "images/2.png";
const image1 = "images/1.png";
const image0 = "images/0.png";
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

/*----- cached element references -----*/
var remainingLetters; //how many letters left, based on random.length.
var random; //randomly selected word
let guessedLetters = []; //array for letters guessed, display.
let winCounter; //if letters left and countdown = 0, declare win.
let loseCounter; //if = 0, game over.
let inputData; //data from user input.
let wordIndex; //crucial for building guessword.
let indexes = []; //allows to handle single orrepeated letters

/*----- event listeners -----*/

/*----- functions -----*/

function getRandom(database) { //select word, build arrays, determine letters count.
    random = database[Math.floor(Math.random() * database.length)];
    //this supports the random selections if I add/subtract array items without code modifications except to databse)
    randomArray = Array.from(random);
    lettersArray = []; //this is just the display of "_"
    winCounter = remainingLetters = random.length; //had to add value to variable
    for (var i = 0; i < random.length; i++) {
        lettersArray[i] = "_";
    }
};

function init() { //initialize and reset for new game.
    getRandom(database);
    loseCounter = 6;
    guessedLetters = [];
    wordIndex;
    document.getElementById("showRandom").innerHTML = "";
    document.getElementById("showRandom").style.backgroundColor = '';
    render();
};

function getInputValue() {
    // Selecting the input element and get its value 
    inputData = (document.getElementById("getInput").value).toLowerCase();
    //Check for duplicates
    let dupCheck = guessedLetters.indexOf(inputData); {
        if (dupCheck > -1) {
            document.getElementById("messages").innerHTML = "Select something else";
            document.getElementById("messages").style.backgroundColor = "yellow";
            getInput.value = "";
            return;
        } //End duplicate checks        
    };
    gamePlay();
};
/* --gamePlay function --*/
function gamePlay() {
    wordIndex = randomArray.indexOf(inputData);
    guessedLetters.push(inputData); //all guessed characters go into guessedLetters array.
    // so we can query if a character has been re-used.
    getAllIndexes();
    {
        if (wordIndex > -1) {
            multiLetters(); 
             goodGuess();            
        } else {
            (loseCounter -= 1);
            badGuess();            
        }
    }
    if (winCounter == 0) {
        document.getElementById("messages").innerHTML = "You Won!";
        document.getElementById("picture").innerHTML = `<img src="${winImg}" width=25% height=25%>`;
        document.getElementById("guessWord").innerHTML = lettersArray.join(' ');
        document.getElementById("guessWord").style.backgroundColor = 'blue';
        document.getElementById("showRandom").innerHTML = `Great job!`;
        document.getElementById("showRandom").style.backgroundColor = "greenyellow";
        document.getElementById("remainingLetters").innerHTML = winCounter; 
        return;
    }
    if (loseCounter == 0) {
        document.getElementById("messages").innerHTML = "That didn't end well....";
        document.getElementById("guessWord").innerHTML = lettersArray.join(' ');
        document.getElementById("showRandom").innerHTML = `The secret word was:  ${randomArray.join("")}`;
        document.getElementById("showRandom").style.backgroundColor = "yellow";
        document.getElementById("badGuesses").innerHTML = loseCounter;
        document.getElementById("picture").innerHTML = `<img src="${lookup[loseCounter]}" width=25% height=25%>` 
        return;
    }
    render();
};

/*-- End gamePlay function --*/
function goodGuess() {
    document.getElementById("messages").innerHTML = "Good Choice!";
    document.getElementById("messages").style.backgroundColor = "greenyellow";
}
function badGuess() {
    document.getElementById("messages").innerHTML = "You have chosen incorrectly";document.getElementById("messages").style.backgroundColor = "red";
}
function getAllIndexes() {
    for (let i = 0; i < randomArray.length; i++)
        if (randomArray[i] === inputData) {
            indexes.push(i)
        };
}
function multiLetters() {
    for (let i = 0; i < indexes.length; i++) {
        lettersArray.splice(indexes[i], 1, inputData);
        (winCounter -= 1); 
    }
    indexes.splice(0, indexes.length);
}

function render() {
    document.getElementById("guessWord").innerHTML = lettersArray.join(' ');
    document.getElementById("badGuesses").innerHTML = loseCounter;
    document.getElementById("remainingLetters").innerHTML = winCounter;
    document.getElementById("guessed").innerHTML = guessedLetters;
    getInput.value = ""; //initialize input field
    document.getElementById("picture").innerHTML = `<img src="${lookup[loseCounter]}" width=25% height=25%>`;
};
