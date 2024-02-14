// imports
import { buildButtons, clearBlanks, updateHangman } from './ui-manager.mjs';
import { getLetter, getWord, youWin, gameOver } from './game-logic.mjs';
import { alphabet, words } from './data.mjs';

// references
const playButton = document.getElementById('play');

// game
function startGame() {
  // your code here
}

playButton.addEventListener('click', startGame);

export { startGame };
