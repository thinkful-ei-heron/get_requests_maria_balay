/* eslint-disable no-console */


function getDogImages(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => console.error(error));
}

function getUserInput() {
  $('.input').on('submit', event => {
    event.preventDefault();
    let typeOfDog = $('.userInput').val();
    $('.userInput').val('');
    getDogImages(typeOfDog);
  });
}

function displayImages(data) {
  if (data.status === 'error') {
    $('.images').html(`<p>${data.message}</p>`);
  } else {
    $('.images').html(`<img src=${data.message} alt= 'dog image'>`);
  }
}



function doThing() {
  getUserInput();
}

$(doThing);
