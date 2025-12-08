/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  // Adds letter placeholders to the display
  addPhraseToDisplay() {
    const phraseUl = document.querySelector("#phrase ul");
    const phraseArr = this.phrase.split("");
    // Create phrase HTML string
    const phraseHtml = phraseArr.map((letter) => {
      const className = letter !== " " ? `hide letter ${letter}` : "space";
      return `<li class="${className}">${letter}</li>`;
    }).join("");
    // Update phrase unordered list HTML
    phraseUl.innerHTML = phraseHtml;
  }

  // Checks to see if the letter matches a letter in the phrase
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  // Reveals the letter(s) on the board that matches the player's selection
  showMatchedLetter(letter) {
    // Get letter list items
    const phraseUl = document.querySelector("#phrase ul");
    const letterLis = phraseUl.querySelectorAll(`.${letter}`);
    // Update CSS class names
    letterLis.forEach((letterLi) => {
      letterLi.classList.remove("hide").add("show");
    });
  }
}