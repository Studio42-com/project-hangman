const randomArray =['o','r','a','n','g','e'];
const lettersArray = [1,2,3,4,5,6]
let inputData = "r";
let guessedLetters = [];
let winCounter = randomArray.length;
let loseCounter = 6;

gameplay(randomArray,lettersArray, guessedLetters, winCounter, loseCounter, inputData);

//gameplay funtion
function gameplay(randomArray,lettersArray, guessedLetters, winCounter,loseCounter, inputData) {
let indexArray = randomArray.indexOf(inputData); {
    if (indexArray > -1) {
        winCounter -= 1;
        lettersArray.splice(indexArray,1,inputData);
        function goodGuess(){
            alert ("Good Letter choice!");
            }
    } else {
        loseCounter -=1;
        guessedLetters.push(inputData);
        function badGuess(){
        alert ("You have chosen incorrectly");
        }
    }
// console.log("Index: ",indexArray, "WinCounter: ",winCounter, "LoseCounter: ",loseCounter);
// console.log("Valid Letters :", lettersArray)
// console.log("Bad letters: ", guessedLetters);
console.log(lettersArray);

};
};
