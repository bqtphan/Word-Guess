//      GENERATE WORD

const wordList = ['alohomora', 'expelliarmus', 'sectumsempra', 'lumos', 'obliviate', 'accio', 'aguamenti', 'imperio', 'stupefy', 'protego', 'riddikulus'];

function randomWord() {
    const randomIndex = Math.floor(Math.random() * 11);
    const chosenWord = wordList[randomIndex];
    return chosenWord;
}

var chosenWord = randomWord();
console.log(chosenWord);


function makeDash() {
    var dashedWord = '';
    for (let charCount = 0; charCount < chosenWord.length; charCount++) {
        dashedWord += '_ ';
    }

    let makingDash = dashedWord.split(' ');
    makingDash.pop();
    // console.log(makingDash);
    return makingDash;
}
var dashedWord = makeDash();
document.getElementById("word").innerHTML = dashedWord;

//      GUESSED LETTERS & SUBSITUTE LETTERS

var guessArray = [];
var remainingGuess = 8;
var win = 0;
document.onkeyup = function (event) {
    var guessLetter = event.key.toLowerCase();

    guessArray.push(guessLetter);
    document.getElementById("guessed").innerHTML = guessArray;
    // console.log(guessArray);

    if (chosenWord.indexOf(guessLetter) > -1) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord.charAt(i) === guessLetter) {
                dashedWord[i] = guessLetter;
                console.log(dashedWord);
                document.getElementById("word").innerHTML = dashedWord;

                if (dashedWord.indexOf('_') === -1) {
                    alert("Yer a wizard!");
                    win++;

                        // RESET ATTEMPTS
                    remainingGuess = 8;
                    guessArray = [];
                    randomWord();
                    let chosenWord = randomWord();
                    makeDash();
                    let dashedWord = makeDash();
                    let i = 0;
                    document.getElementById("word").innerHTML = dashedWord;
                    document.getElementById("win").innerHTML = win;
                    
                }
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
document.getElementById("win").innerHTML = win;
