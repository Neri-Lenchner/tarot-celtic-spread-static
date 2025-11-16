// 1. Select the <img> elements (not the divs)
const card1 = document.querySelector('#card-1 img');
const card2 = document.querySelector('#card-2 img');
const card3 = document.querySelector('#card-3 img');
const card4 = document.querySelector('#card-4 img');
const card5 = document.querySelector('#card-5 img');
const card6 = document.querySelector('#card-6 img');
const card7 = document.querySelector('#card-7 img');
const card8 = document.querySelector('#card-8 img');
const card9 = document.querySelector('#card-9 img');
const card10 = document.querySelector('#card-10 img');

// 2. Define cardsBackArray: 10 back cards (if not in tarot-deck-array.js)
const cardsBackArray = Array(10).fill({ image: 'Tarot-deck/cards-back.jpg' });

let curretArray = JSON.parse(localStorage.getItem('spread')) || cardsBackArray;

// 3. Set initial images using .src
card1.src = curretArray[0].image;
card2.src = curretArray[1].image;
card3.src = curretArray[2].image;
card4.src = curretArray[3].image;
card5.src = curretArray[4].image;
card6.src = curretArray[5].image;
card7.src = curretArray[6].image;
card8.src = curretArray[7].image;
card9.src = curretArray[8].image;
card10.src = curretArray[9].image;

function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[random]] = [newArray[random], newArray[i]];
  }
  // Move spreadCards OUTSIDE the loop
  spreadCards(newArray);
  console.log(newArray);
  localStorage.setItem('spread', JSON.stringify(newArray));
}

function spreadCards(array) {
  // Use .src instead of .innerHTML
  card1.src = array[0].image;
  card2.src = array[1].image;
  card3.src = array[2].image;
  card4.src = array[3].image;
  card5.src = array[4].image;
  card6.src = array[5].image;
  card7.src = array[6].image;
  card8.src = array[7].image;
  card9.src = array[8].image;
  card10.src = array[9].image;
}

const spreadButton = document.querySelector('.js-spread-button');
spreadButton.addEventListener('click', () => {
  shuffle(cardsDeck);
});

const clearSpreadButton = document.querySelector('.js-clear-spread-button');
clearSpreadButton.addEventListener('click', () => {
  shuffle(cardsBackArray);
});