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
}