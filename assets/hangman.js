const words = ["fortnite", "callofduty", "bioshock", "minecraft", "supermariobros", "animalcrossing", "madden", "mortalkombat"];
let randomword = ''
let lettersOfrandomWord = []
let blanks = 0;
let blanksandsuccesses = []
let wrongGuesses = []



let wins = 0;
let losses = 0;
let remainingGuesses = 9
// start game function
function newGame() {

    randomword = words[Math.floor(Math.random() * words.length)];
    lettersOfrandomWord = randomword.split('');
    blanks = lettersOfrandomWord.length;

    remainingGuesses = 9;
    wrongGuesses = [];
    blanksandsuccesses = [];

    // creates underscores instead of letters of a word
    for (let i = 0; i < blanks; i++) {
        blanksandsuccesses.push('_')
    }
    console.log(blanksandsuccesses)
    console.log(randomword)


    document.getElementById("currentWord").innerHTML = blanksandsuccesses.join(" ");
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses
    document.getElementById('winstracker').innerHTML = " " + wins
    document.getElementById("losstracker").innerHTML = ' ' + losses
    document.getElementById("playerguesses").innerHTML = wrongGuesses.join(" ")
}newGame()






// listen for a keypress turn that keypress into a string

let listener = document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let keyPressed = String.fromCharCode(keycode)
    console.log(keyPressed)
    letterCheck(keyPressed)
    newKey()
});



// function to check if letter is in word 
function letterCheck(keyPressed) {
    let lettersinword = false;
    for (let i = 0; i < blanks; i++) {
        if (lettersOfrandomWord[i] === keyPressed) {
            lettersinword = true;
            console.log(lettersOfrandomWord[i])

        }
    }
    console.log(lettersinword)
    
 // if letter is in word check where   
    if (lettersinword) {
        for (let x = 0; x < blanks; x++) {
            if (randomword[x] === keyPressed) {
                blanksandsuccesses[x] = keyPressed;
            }
        }
    console.log(blanksandsuccesses)
    } else {
        wrongGuesses.push(keyPressed);
        remainingGuesses--;

    }
}
// update between keypresses
function newKey () {
    console.log('Win count: ' + wins )
    console.log('loss count: ' + losses)
    console.log('Number of guesses:' + remainingGuesses)
    $('#remainingGuesses').html(remainingGuesses)
    $('#losstracker').html(losses)
    $('#wintracker').html(wins)
    $('#playerguesses').html(wrongGuesses)
    $("#currentWord").html(blanksandsuccesses.join(" "))

    if (lettersOfrandomWord.toString() === blanksandsuccesses.toString()) {
        wins++
        alert('You Win!')
        $("#winstracker").html(wins)
        newGame()
    }
    else if (remainingGuesses === 0) {
        losses++;
        alert("You lose");
        $("#losstracker").html(losses)
        newGame()
    }
}


