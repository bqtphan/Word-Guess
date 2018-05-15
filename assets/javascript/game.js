//      WIN COUNT




//      GENERATE WORD

const wordList = ['alohomora', 'expelliarmus', 'sectumsempra', 'lumos', 'obliviate'];

function randomWord() {
    const randomIndex = Math.floor(Math.random() * 5);
    const chosenWord = wordList[randomIndex];
    return chosenWord;
}

var chosenWord = randomWord();
var splitWord = chosenWord.split();
console.log(splitWord);

function makeDash() {
    var dashedWord = '';
    for (let charCount = 0; charCount < chosenWord.length; charCount++) {
        dashedWord += '_ ';
    }
    return dashedWord;
}
document.getElementById("word").innerHTML = makeDash();

var dashedWord = makeDash();

console.log(dashedWord);


//      GUESSED LETTERS & SUBSITUTE LETTERS

var guessArray = [];
var guessWord = chosenWord;
var remainingGuess = 8;

document.onkeyup = function (event) {
    var guessLetter = event.key.toLowerCase();
    //indexof to not use nonletters
    guessArray.push(guessLetter);
    document.getElementById("guessed").innerHTML = guessArray;

    if (guessWord.indexOf(guessLetter) > -1) {
        for (i = 0; i < guessWord.length; i++) {
            if (guessWord[i] === guessLetter) {
                dashedWord[i] = guessWord[i];
            }            
        }
    }
    else {
        remainingGuess--;
        if (remainingGuess === 0) {
            alert('RAN OUT OF GUESSES! GAME OVER!');
        }
        document.getElementById("remainingGuess").innerHTML = remainingGuess;
    }
}
document.getElementById("remainingGuess").innerHTML = remainingGuess;