//      GENERATE WORD

const wordList = ['alohomora', 'expelliarmus', 'sectumsempra', 'lumos', 'obliviate', 'accio', 'aguamenti', 'imperio', 'stupefy', 'protego', 'riddikulus'];
var chosenWord;
var dashedWord;
var printDashedWord;
var guessArray;
var remainingGuess;
var win = 0;

init();

function init() {
    chosenWord = randomWord();
    dashedWord = makeDash(chosenWord);
    console.log(chosenWord);
    printDashedWord = dashedWord.join('');
    guessArray = [];
    remainingGuess = 8;
    isDone = false;
    document.getElementById("remainingGuess").innerHTML = remainingGuess;
    document.getElementById("win").innerHTML = win;
    document.getElementById("word").innerHTML = printDashedWord;
}

function randomWord() {
    const randomIndex = Math.floor(Math.random() * 11);
    const chosenWord = wordList[randomIndex];
    return chosenWord;
}

function makeDash(newWord) {
    let dashWord = '';
    for (let charCount = 0; charCount < newWord.length; charCount++) {
        dashWord += '_';
    }

    let makingDash = dashWord.split('');
    return makingDash;
}

//      GUESSED LETTERS & SUBSITUTE LETTERS

document.onkeyup = function (event) {
    var guessLetter = event.key.toLowerCase();

    guessArray.push(guessLetter);
    document.getElementById("guessed").innerHTML = guessArray;

    if (chosenWord.indexOf(guessLetter) > -1) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord.charAt(i) === guessLetter) {
                dashedWord[i] = guessLetter;
                document.getElementById("word").innerHTML = dashedWord.join("");
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
    if (dashedWord.join('') === chosenWord) {
        alert("Yer a wizard!");
        win++;
        document.getElementById("win").innerHTML = win;
        isDone = true;
    }

    if (isDone) {
        init();
    }
}