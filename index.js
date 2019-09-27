/* eslint-disable no-console */
function getUserInput() {
  $('.input').on('submit', event => {
    event.preventDefault();
    
  });
}



function doThing() {
  getUserInput();
}

$(doThing);
