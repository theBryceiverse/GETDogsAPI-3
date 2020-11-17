function getDogImage(dogBreed) {
  fetch('https://dog.ceo/api/breed/' + dogBreed + '/images/random')
    .then(response => {
      if(!response.ok){
        alert('Breed not found! Try again!');
        throw new Error('Something went wrong');
      } else {
        return response.json()
      }
    }) 
    .then(responseJson => displayResults(responseJson))

    .catch(error => {
      console.log(error)
      //alert("error!")
    }); 
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
    $('h2').append(
      `<img src="${responseJson.message}" class="getdog">`
    )
  //display the results section
  $('section').removeClass('hidden');
}
  
function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //gets number from input & saves to variable
    let dogBreed = $('#dogNumber').val();  
    //console.log(dogNumber); 
    getDogImage(dogBreed);
  });
}
  
$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

function response(){
    response().json; 
}; 

// response => response.json()
//https://developer.mozilla.org/en-US/docs/Web/API/Response