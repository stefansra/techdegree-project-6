// variables

const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const startButton = document.querySelector(".btn__reset");
const overlay = document.querySelector("#overlay");
const randomPhrases = [
  "Javascript",
  "Cat",
  "Fridge",
  "Backpack",
  "Colorprinter",
  "Headphones",
  "Blue Shirt"
];
let missedGuess = 0;

// event listener start

startButton.addEventListener("click", event => {
  overlay.style.display = "none";
});

// test

let randomPhraseArray = getRandomPhrase(randomPhrases);
addPhraseToDisplay(randomPhraseArray);

// functions

function getRandomPhrase(array) {
  if (array.length > 0) {
    const randomNumber = Math.floor(Math.random() * array.length);
    const randomPhrase = array[randomNumber];
    const splittedPhrase = randomPhrase.split("");
    console.log(array);
    console.log(randomPhrase);
    console.log(randomNumber);
    console.log(splittedPhrase);
    return splittedPhrase;
  }
}

function addPhraseToDisplay(array) {
  for (let i = 0; i < array.length; i++) {
    const li = document.createElement("li");
    li.textContent = array[i];
    if (li.textContent !== " ") {
      li.className = "letter";
    } else {
      li.className = "space";
    }
    phrase.appendChild(li);
  }
}
