/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// DOM element selections
const startGameBtn = document.querySelector("#btn__reset");

// Add a click event listener to the Start Game button
startGameBtn.addEventListener("click", () => {
  // Create a new Game object
  const game = new Game();
  // Start the game
  game.startGame();
});