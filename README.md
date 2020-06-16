# Psychic-Game

## Overview
For this application I created a simple letter guessing game. A random letter is generated and the user has 9 chances to guess it correctly. If guesses run out the game resets, a new random letter in generated, and a loss is added to the scoreboard. A correct guess does the same but instead adds a win to the board.

## Deployment

You can view the application by [clicking here](https://billwee.github.io/Psychic-Game/)


## Challenges

For this game I needed two different forms of validation for it to preform correctly.

- The user can only guess letters
  - I implemented this function that will only return true if a letter is pressed.  
```
  function isLetter(key) {
  if (key.toLowerCase() != key.toUpperCase() && key.length === 1) {
    return true;
  } else {
    return false;
  }
}
```
 - The user can't guess the same letter twice
   - I used a string that contains the alphabet and removed characters from it that were pressed. If the character was no longer in the string it would alert the user that they guess that letter already and not take any guesses away.
```
   if (alphabet.indexOf(keyPress) >= 0) {
    alphabet = alphabet.replace(keyPress, '');
    console.log(alphabet);
   } else {
    alert(`You already pressed ${keyPress}`);
    guessesLeft += 1;
    yourGuesses.pop();
    }
  ```
## Technology Used
- HTML
- CSS
- Javascript
 
