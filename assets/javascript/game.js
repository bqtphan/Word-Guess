//      WIN COUNT
var win = 0
// function winAdd() {
//     for (winCheck = 0; winCheck < chosenWord.length; winCheck++) {
//         if (dashWord !== '_ ') {
//             win++;
//         }
//     }
// }
// // var win = winadd()
document.getElementById("win").innerHTML = win;

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

    //  REVIEW
    let temp = dashedWord.split(' ');
    temp.pop();
    console.log(temp);
    return temp;
}
var dashedWord = makeDash();
document.getElementById("word").innerHTML = dashedWord;




//      GUESSED LETTERS & SUBSITUTE LETTERS

var guessArray = [];
var remainingGuess = 8;

document.onkeyup = function (event) {
    var guessLetter = event.key.toLowerCase();

    guessArray.push(guessLetter);
    document.getElementById("guessed").innerHTML = guessArray;
    console.log(guessArray);

    if (chosenWord.indexOf(guessLetter) > -1) {
        for (let i = 0; i < chosenWord.length; i++) {
            if (chosenWord.charAt(i) === guessLetter) {
                dashedWord[i] = guessLetter;
                console.log(dashedWord);
                document.getElementById("word").innerHTML = dashedWord;
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

//console.log(dashedWord);
// console.log(dashedWordArray);    
//console.log(splitWord);
// console.log(guessWord);
