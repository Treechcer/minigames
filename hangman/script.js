let word = "";
let guessedLetters = [];
let guesses = 13;
let correctGuesses = new Set();

function game() {
    word = document.getElementById("wordInput").value.toLowerCase();
    if (word === "") {
        alert("Please enter a word first!");
        return;
    }
    guessedLetters = [];
    correctGuesses.clear();
    guesses = 13;
    document.getElementById("health").innerText = `Guesses left: ${guesses}`;
    document.getElementById("output").innerText = "Game started! Guess a letter.";
    document.getElementById("wordInput").value= " No cheating :)";
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
        correctGuesses.add(guess);
        document.getElementById("output").innerText = `Good guess! '${guess}' is in the word.`;
    } else {
        guesses--;
        document.getElementById("output").innerText = `Wrong guess! '${guess}' is not in the word. Guesses left: ${guesses}`;
    }

    document.getElementById("health").innerText = `Guesses left: ${guesses}`;

    let uniqueLettersInWord = new Set(word);
    if ([...uniqueLettersInWord].every(letter => correctGuesses.has(letter))) {
        document.getElementById("output").innerText = `Congrats, you won! The word was: ${word}`;
        return;
    }

    if (guesses === 0) {
        document.getElementById("output").innerText = `Game over! The word was: ${word}`;
    }
}
//add the fucking hangman picture
//hide the word after you start the game