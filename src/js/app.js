var ourRequest = new XMLHttpRequest();
var rovers = ['opportunity', 'curiosity', 'spirit'];
var photosContainer = document.querySelector('.photosContainer');
var noElementsAvailable = document.querySelector('#noElementsAvailable');
var randomButton = document.querySelector('#randomButton');
var searchButton = document.querySelector('#searchButton');
var slider = document.querySelector('#myRange');
var demo = document.querySelector('#demo');
var widthText = document.querySelector('#widthText');
var heightText = document.querySelector('#heightText');
var heightV = document.querySelector('#heightV');
var widthV = document.querySelector('#widthV');

var picturesToDisplay = 10;
widthValue = 300;
heightValue = 300;


demo.innerHTML = slider.value;
widthText.innerHTML = widthV.value;
heightText.innerHTML = heightV.value;

slider.oninput = function() {
    demo.innerHTML = this.value;
    picturesToDisplay = this.value;
    picturesToDisplay*=2;
}

widthV.oninput = function() {
    widthText.innerHTML = this.value;
    widthValue = this.value;

}

heightV.oninput = function() {
    heightText.innerHTML = this.value;
    heightValue = this.value;

}




var spiritButton = document.querySelector('#spirit');
var curiosityButton = document.querySelector('#curiosity');
var opportunityButton = document.querySelector('#opportunity');
var chosenRover = 'curiosity';


function addRover(e) {
    var buttonTouched = e.target;


    var targetButton = e.target.id;

    if (spiritButton.classList.contains('btn-pressed')) {
        spiritButton.classList.remove('btn-pressed');
    } else if (curiosityButton.classList.contains('btn-pressed')) {
        curiosityButton.classList.remove('btn-pressed');
    } else if (opportunityButton.classList.contains('btn-pressed')) {
        opportunityButton.classList.remove('btn-pressed');
    }

    buttonTouched.classList.toggle('btn-pressed');

    chosenRover = e.target.id;

}



// Function to randomize
function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var randomRover;
var solParameter;
var url;
var ourData;

searchButton.addEventListener('click', function() {
    
    randomRover = Math.floor(Math.random() * 3) + 0;
    console.log(chosenRover);
    solParameter = randomize(1000, 2000);
    url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + chosenRover + '/photos?sol=' + solParameter + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';
    console.log(url);

    ourRequest.open('GET', url);
    ourRequest.onload = function() {

        photosContainer.innerHTML = '';
        noElementsAvailable.innerHTML = '';
        ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});


randomButton.addEventListener('click', function() {

    randomRover = Math.floor(Math.random() * 3) + 0;
    console.log(rovers[randomRover]);
    solParameter = randomize(1000, 2000);
    url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + chosenRover + '/photos?sol=' + solParameter + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';

    ourRequest.open('GET', url);
    ourRequest.onload = function() {

        photosContainer.innerHTML = '';
        noElementsAvailable.innerHTML = '';
        ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});


function renderHTML(data) {
    if (ourData.photos.length) {

        for (var i = 0; i < picturesToDisplay; i += 2) {
            var img = document.createElement("img");
            img.width = widthValue;
            img.height = heightValue;
            img.src = ourData.photos[i].img_src;
            img.style.margin = "1em 0";
            photosContainer.appendChild(img);
        }

    } else {
        photosContainer.innerHTML = "No pictures on day " + solParameter + ", please hit the botton again!";
    }
}

