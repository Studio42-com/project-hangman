/*----- constants -----*/
const database = ["pug", "icon", "crate", "orange", "lobster", "pyromaniac"];

//Selects random word and calculates length.


/*----- app's state (variables) -----*/
// let scores, results, winner;
var random = database[Math.floor(Math.random() * database.length)];
    //this supports the random selections if I add/subtract array items without code modifications except to databse)

var guessedLetters; //array for letters guess, display.
var winCounter; //if letters left and countdown = 0, declare win.
var loseCounter; //if = 6+1, game over.


console.log(random,random.length);



/*----- cached element references -----*/

/*----- event listeners -----*/
//button click listener.

/*----- functions -----*/

// init();

// render();