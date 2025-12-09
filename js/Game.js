/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Around the clock"),
      new Phrase("The early bird catches the worm"),
      new Phrase("Two heads are better than one"),
      new Phrase("Better safe than sorry"),
      new Phrase("Practice makes perfect")
    ];
    this.activePhrase = null;
  }

  // Starts the game
  startGame() {
    // Hide the start screen overlay
    const overlayDiv = document.querySelector("#overlay");
    overlayDiv.style.display = "none";
    // Get random phrase and set the activePhrase property with the phrase
    this.activePhrase = getRandomPhrase();
    // Add that phrase to the board
    this.activePhrase.addPhraseToDisplay();
  }

  // Retrieves one of the phrases stored in the phrases array and returns it
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }
}