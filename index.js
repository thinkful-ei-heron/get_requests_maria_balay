/* eslint-disable no-console */


function getDogImages(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function getUserInput() {
  $('.input').on('submit', event => {
    event.preventDefault();
    let numberOfDogs = $('.userInput').val();
    $('.userInput').val('');
    getDogImages(numberOfDogs);
  });
}



function doThing() {
  getUserInput();
}

$(doThing);
