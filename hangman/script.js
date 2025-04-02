let word = "";
let guessedLetters = [];
let guesses = 13;

function game() {
    word = document.getElementById("wordInput").value.toLowerCase();
    if (word === "") {
        alert("Please enter a word first!");
        return;
    }
    guessedLetters = [];
    guesses = 13;
    document.getElementById("health").innerText = `Guesses left: ${guesses}`;
    document.getElementById("output").innerText = "Game started! Guess a letter.";
}

function submit() {
    let guess = document.getElementById("guessInput").value.toLowerCase();
    if (guess.length !== 1 || !guess.match(/[a-z]/)) {
        alert("Please enter a single letter!");
        return;
    }

    if (guessedLetters.includes(guess)) {
        alert("You already guessed that letter!");
        return;
    }
    guessedLetters.push(guess);

    if (word.includes(guess)) {
        document.getElementById("output").innerText = `Good guess! '${guess}' is in the word.`;
    } else {
        guesses--;
        document.getElementById("output").innerText = `Wrong guess! '${guess}' is not in the word. Guesses left: ${guesses}`;
    }

    document.getElementById("health").innerText = `Guesses left: ${guesses}`;

    if (guesses === 0) {
        document.getElementById("output").innerText = `Game over! The word was: ${word}`;
    }
}
//make an actual finish, make it so that when the word has multiple of the same letters it takes them all
//you cant guess the same letter twice function, aaaaand finally the fucking hangman