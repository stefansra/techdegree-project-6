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

qwerty.addEventListener("click", event => {
  if (event.target.nodeName.toLowerCase() === "button") {
    event.target.className = "chosen";
    event.target.setAttribute("disabled", true);
    const letterFound = checkLetter(event.target);
    console.log(letterFound);
    console.log(event.target);
    console.log(event.target.nodeName);
  }
});

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

function checkLetter(buttonClicked) {
  const letterFields = document.querySelectorAll(".letter");
  let matchedLetter;
  for (let i = 0; i < letterFields.length; i++) {
    console.log("letterFields: " + letterFields[i].textContent);
    console.log("buttonClicked: " + buttonClicked.textContent);
    if (letterFields[i].textContent.toLowerCase() === buttonClicked.textContent.toLowerCase()) {
      letterFields[i].className += " show";
      matchedLetter = letterFields[i];
      console.log(matchedLetter);
    }
  }
  if (matchedLetter != undefined) {
    return matchedLetter;
  } else {
    return null;
  }
}
