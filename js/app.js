/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Stores Game object instance
let game = null;

// DOM element selections
const startGameBtn = document.querySelector("#btn__reset");
const qwertyDiv = document.querySelector("#qwerty");

// Add a click event listener to the Start Game button
startGameBtn.addEventListener("click", () => {
  // Create a new Game object
  game = new Game();
  // Start the game
  game.startGame();
});

// Add click event listener to qwerty div
qwertyDiv.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    game.handleInteraction(e.target);
  }
});