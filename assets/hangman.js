let words = ["fortnite", "callofduty", "bioshock", "minecraft", "supermariobros", "animalcrossing"];
let randomword = ''
let lettersOfrandomWord = []
let blanks = 0;
let blanksandsuccesses = []
let wrongGuesses = []



let wins = 0;
let losses = 0;
let remainingGuesses = 9
// start game function
function newGame(){

    randomword = words[Math.floor(Math.random() * words.length)];
    lettersOfrandomWord = randomword.split('');
    blanks = lettersOfrandomWord.length;
    
    remainingGuesses = 9;
    wrongGuesses = [];
    blanksandsuccesses = [];


    for (let i = 0; i < blanks; i++) {
        blanksandsuccesses.push('_')
    }
    document.getElementById("currentword").innerHTML = blanksandsuccesses.join(" ");
    document.getElementById("remainingGuesses").innerHTML
    )
    
}








// function to check for matches 
function letterCheck(letter) {
    let lettersinword = false;

    if (correctletter) {
        for (let i =0; t < blanks; i++) {
        if (randomword[i] === letter) {
            lettersinword = true;
        }
    }
    if (lettersinword) {
        
    }
}
