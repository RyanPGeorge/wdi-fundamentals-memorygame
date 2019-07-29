console.log("Up and running!");

let cards = [
    {
    rank : "queen", 
    suit : "hearts",
    cardImage : "images/queen-of-hearts.png",
    },
    {
    rank : "queen", 
    suit : "diamonds",
    cardImage : "images/queen-of-diamonds.png",
    },
    {
    rank : "king", 
    suit : "hearts",
    cardImage: "images/king-of-hearts.png",
    },
    {
    rank : "king", 
    suit : "diamonds",
    cardImage: "images/king-of-diamonds.png",
        }
];

let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
};

function flipCard(cardId) {
checkForMatch();
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else alert("Sorry, try again.")
console.log("User flipped " + cards[cardId].rank)
cardsInPlay.push(cards[cardsId].rank);
console.log(cardImage);
console.log(suit);
};
flipCard(0);
flipCard(2);





/*

console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);



};


function checkForMatch() {

};

*/