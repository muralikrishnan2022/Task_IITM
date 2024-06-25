 let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const message = document.getElementById('message');
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a number between 1 and 100.';
    } else if (guess < targetNumber) {
        message.textContent = 'Too low! Try again.';
    } else if (guess > targetNumber) {
        message.textContent = 'Too high! Try again.';
    } else {
        message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        // Reset the game
        targetNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
    }
}
