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
    // Remove the win or lose CSS classes from overlay
    overlayDiv.classList.remove("win");
    overlayDiv.classList.remove("lose");
    // Get random phrase and set the activePhrase property with the phrase
    this.activePhrase = this.getRandomPhrase();
    // Add that phrase to the board
    this.activePhrase.addPhraseToDisplay();
  }

  // Retrieves one of the phrases stored in the phrases array and returns it
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  // Controls most of the game logic
  handleInteraction(btnClicked) {
    // Disable the selected letter’s onscreen keyboard button
    btnClicked.disabled = true;
    // Get letter
    const letter = btnClicked.textContent;
    // If the phrase includes the guessed letter
    if (this.activePhrase.checkLetter(letter)) {
      btnClicked.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letter);
      // If the player has won the game
      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      // Phrase does not include the guessed letter
      btnClicked.classList.add("wrong");
      this.removeLife();
    }
  }

  // Removes a life from the scoreboard
  removeLife() {
    const heartImgs = document.querySelectorAll(".tries img");
    // Loop through heartImgs backwards
    for (let i = heartImgs.length - 1; i >= 0; i--) {
      const heartImg = heartImgs[i];
      // If heartImg's src is liveHeart.png 
      if (heartImg.getAttribute("src") === "images/liveHeart.png") {
        // Replace src with lostHeart.png
        heartImg.src = "images/lostHeart.png";
        break;
      }
    }
    // Increment the missed property
    this.missed++;
    // If the player has five missed guesses then end the game
    if (this.missed === 5) {
      this.gameOver();
    }
  }

  // Checks to see if the player has revealed all of the letters in the active phrase
  checkForWin() {
    // Get lis with the class hide
    const hiddenLetters = document.querySelectorAll("#phrase .hide");
    // Return if there are no hidden letters
    return hiddenLetters.length === 0;
  }

  // Ends the game
  gameOver() {
    // DOM element selections
    const overlayDiv = document.querySelector("#overlay");
    const gameOverMessageH1 = document.querySelector("#game-over-message");
    const phraseUl = document.querySelector("#phrase ul");
    const keyBtns = document.querySelectorAll(".key");
    const heartImgs = document.querySelectorAll(".tries img");
    // Display the start screen overlay and remove start class
    overlayDiv.style.display = "flex";
    overlayDiv.classList.remove("start");
    // Update the overlay h1 element with a win or loss message and adds a win/lose class to the overlay
    if (this.checkForWin()) {
      gameOverMessageH1.textContent = `Congratulations, you won! The phrase was "${this.activePhrase.phrase}".`;
      overlayDiv.classList.add("win");
    } else {
      gameOverMessageH1.textContent = "Better luck next time!";
      overlayDiv.classList.add("lose");
    }
    // Reset the game
    // Remove all li elements from the Phrase ul element
    phraseUl.innerHTML = "";
    // Enable all of the onscreen keyboard buttons and remove the chosen or wrong CSS classes
    keyBtns.forEach((keyBtn) => {
      keyBtn.disabled = false;
      keyBtn.classList.remove("chosen");
      keyBtn.classList.remove("wrong");
    });
    // Reset all of the heart images in the scoreboard
    heartImgs.forEach((heartImg) => heartImg.src = "images/liveHeart.png");
  }
}