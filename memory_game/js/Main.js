console.log("Up and running!");

// let cardOne = "queen";

// let cardTwo = "king";

// let cardThree = "queen";

// let cardFour = "king";

// console.log("User flipped " + cardOne);

// console.log("User flipped " + cardThree);

let cards = ["queen", "queen", "king", "king"];

let cardsInPlay = [];

let cardOne = cards[0];

let cardTwo = cards[2];

cardsInPlay.push("cardOne");

cardsInPlay.push("cardTwo");

// alert("Hello, friends.");

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  console.log("You Have Picked " + cardsInPlay);
} else {
  console.log("Try Again ");
}
