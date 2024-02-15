// imports
import { buildButtons, clearBlanks, updateHangman } from './ui-manager.mjs';
import { getLetter, getWord, youWin, gameOver } from './game-logic.mjs';
import { alphabet, words } from './data.mjs';

// references
const playButton = document.getElementById('play');
const buttonsDiv = document.getElementById('buttons');
const hangmanImg = document.getElementById('hangman');
const blanks = document.getElementsByClassName('blank');

// game
function startGame() {
  // tally variables
  let turnCount = 0;
  let goodGuessCount = 0;
  let badGuessCount = 0;

  clearBlanks(blanks);
  updateHangman(hangmanImg, 0);
  playButton.remove();
  buttonsDiv.innerHTML = buildButtons(alphabet);
  const word = getWord(words);
  console.log(word);

  alphabet.forEach(function (char) {
    const button = document.getElementById(char);

    button.addEventListener('click', function () {
      const letter = getLetter(button);
      console.log(letter);
      turnCount++;

      button.classList.add('disabled');

      if (!word.includes(letter)) {
        badGuessCount++;
        updateHangman(hangmanImg, badGuessCount);
        if (badGuessCount >= 7) {
          gameOver(buttonsDiv, word);
        }
      } else {
        const wordArray = word.split('');
        for (let i = 0; i < wordArray.length; i++) {
          if (wordArray[i] === letter) {
            blanks[i].value = letter;
            goodGuessCount++;
          }
        }
        if (goodGuessCount >= 6) {
          youWin(buttonsDiv, hangmanImg);
        }
      }
    });
  });
}

playButton.addEventListener('click', startGame);

export { startGame };
