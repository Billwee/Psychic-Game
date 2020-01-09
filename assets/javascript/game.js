var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuesses = [];
var keyPress;
var winsHTML = document.getElementById('wins');
var loseHTML = document.getElementById('losses');
var guessesLeftHTML = document.getElementById('guessesLeft');
var guessedHTML = document.getElementById('guessed');

function letter() {
  randomLetter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function isLetter(key) {
  if (key.toLowerCase() != key.toUpperCase() && key.length === 1) {
    return true;
  } else {
    return false;
  }
}

winsHTML.innerHTML = wins;
loseHTML.innerHTML = losses;
guessesLeftHTML.innerHTML = guessesLeft;

letter();

console.log(randomLetter);

document.onkeyup = function(event) {
  keyPress = event.key;
  if (!isLetter(keyPress)) {
    return alert('Enter a letter');
  }
  if (alphabet.indexOf(keyPress) >= 0) {
    alphabet = alphabet.replace(keyPress, '');
    console.log(alphabet);
  } else {
    alert(`You already pressed ${keyPress}`);
    guessesLeft += 1;
    yourGuesses.pop();
  }

  if (guessesLeft >= 2) {
    if (keyPress.toLowerCase() !== randomLetter) {
      guessesLeft -= 1;
      yourGuesses.push(' ' + keyPress.toLowerCase() + ' ');
      guessedHTML.innerHTML = yourGuesses;
      guessesLeftHTML.innerHTML = guessesLeft;
    } else {
      return (
        (wins += 1),
        (guessesLeft = 9),
        (guessesLeftHTML.innerHTML = guessesLeft),
        (winsHTML.innerHTML = wins),
        (yourGuesses = []),
        (guessedHTML.innerHTML = yourGuesses),
        letter(),
        console.log(randomLetter),
        (alphabet = 'abcdefghijklmnopqrstuvwxyz')
      );
    }
  } else {
    return (
      (losses += 1),
      (guessesLeft = 9),
      (guessesLeftHTML.innerHTML = guessesLeft),
      (loseHTML.innerHTML = losses),
      (yourGuesses = []),
      (guessedHTML.innerHTML = yourGuesses),
      letter(),
      console.log(randomLetter),
      (alphabet = 'abcdefghijklmnopqrstuvwxyz')
    );
  }
};
