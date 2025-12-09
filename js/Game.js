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
}