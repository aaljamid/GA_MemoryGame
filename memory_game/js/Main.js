const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
    alert("Sorry, try again.");
  }
}

function flipCard(cardId) {
  //   let cardOne = cards[0];
  console.log("User flipped " + cards[cardId].rank);
  //   let cardTwo = cards[2];
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
}

flipCard(0);
flipCard(2);
checkForMatch();

// cardsInPlay.push("cardOne");

// cardsInPlay.push("cardTwo");

// // alert("Hello, friends.");

// if (cardsInPlay.length === 2) {
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//         alert("You found a match!");
//     } else {
//         alert("Sorry, try again.");
//     }
//     console.log("You Have Picked " + cardsInPlay);
// } else {
//     console.log("Try Again ");
// }
