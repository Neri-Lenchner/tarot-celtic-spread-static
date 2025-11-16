const card1 = document.querySelector('.js-card-1');
const card2 = document.querySelector('.js-card-2');
const card3 = document.querySelector('.js-card-3');
const card4 = document.querySelector('.js-card-4');
const card5 = document.querySelector('.js-card-5');
const card6 = document.querySelector('.js-card-6');
const card7 = document.querySelector('.js-card-7');
const card8 = document.querySelector('.js-card-8');
const card9 = document.querySelector('.js-card-9');
const card10 = document.querySelector('.js-card-10');

let curretArray = JSON.parse(localStorage.getItem('spread')) || cardsBackArray;

card1.innerHTML = curretArray[0].image;
card2.innerHTML = curretArray[1].image;
card3.innerHTML = curretArray[2].image;
card4.innerHTML = curretArray[3].image;
card5.innerHTML = curretArray[4].image;
card6.innerHTML = curretArray[5].image;
card7.innerHTML = curretArray[6].image;
card8.innerHTML = curretArray[7].image;
card9.innerHTML = curretArray[8].image;
card10.innerHTML = curretArray[9].image;

function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[random]] = [newArray[random], newArray[i]];

    spreadCards(newArray);
    console.log(newArray);
    localStorage.setItem('spread', JSON.stringify(newArray));
  }
}

function spreadCards(array) {
  card1.innerHTML = array[0].image;
  card2.innerHTML = array[1].image;
  card3.innerHTML = array[2].image;
  card4.innerHTML = array[3].image;
  card5.innerHTML = array[4].image;
  card6.innerHTML = array[5].image;
  card7.innerHTML = array[6].image;
  card8.innerHTML = array[7].image;
  card9.innerHTML = array[8].image;
  card10.innerHTML = array[9].image;
}

const spreadButton = document.querySelector('.js-spread-button');
spreadButton.addEventListener('click', () => {
  shuffle(cardsDeck);
});

const clearSpreadButton = document.querySelector('.js-clear-spread-button');
clearSpreadButton.addEventListener('click', () => {
  shuffle(cardsBackArray);
});


