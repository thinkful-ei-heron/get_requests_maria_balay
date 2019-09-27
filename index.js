/* eslint-disable no-console */


function getDogImages(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson));

}

function getUserInput() {
  $('.input').on('submit', event => {
    event.preventDefault();
    let numberOfDogs = $('.userInput').val();
    $('.userInput').val('');
    getDogImages(numberOfDogs);
  });
}

function displayImages(data) {
  data.message.forEach(item => {
    $(".images").append(`<img src=${item} alt= 'dog image'>`)
  });
}



function doThing() {
  getUserInput();
}

$(doThing);
