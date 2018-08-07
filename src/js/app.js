"use strict";
// --               VARIABLES USED              -- //
const frag = document.createDocumentFragment();
// -- Set a dummy element for position 0 -- //
const rovers = ["dummy", "opportunity", "curiosity", "spirit"];

// -- Container for displaying the pictures -- //
const photosContainer = document.querySelector(".photos-container__photos");
const photosDetails = document.querySelector(".photos-container__details");

// -- Button to search for the pictures -- //
const randomButton = document.querySelector("#randomButton");
const searchButton = document.querySelector("#searchButton");

// --       RANGE INPUT (User choice)        -- //
// -- Range input for # of Pictures to display -- //
const rangeImagesToDisplay = document.querySelector("#rangeImagesToDisplay");
// -- Range input to Select HEIGHT of the pictures -- //
const rangeHeightImage = document.querySelector("#rangeHeightImage");
// -- Range input to Select WIDTH of the pictures -- //
const rangeWidthImage = document.querySelector("#rangeWidthImage");

// --     RANGE VALUE DISPLAY for HTML     -- //
const imagesToDisplayText = document.querySelector("#imagesToDisplayText");
const widthImageText = document.querySelector("#widthImageText");
const heightImageText = document.querySelector("#heightImageText");

// --     Rover Buttons     -- //
const spiritButton = document.querySelector("#spirit");
const curiosityButton = document.querySelector("#curiosity");
const opportunityButton = document.querySelector("#opportunity");
let roverButton = document.querySelectorAll("roverButton");
// -- Default value -- //
let chosenRover = "curiosity";

// --     DEFAULT VALUES FOR DEFAULT SEARCH     -- //
let picturesToDisplay = 10;
// -- Picture width -- //
let widthValue = 300;
// -- Picture height -- //
let heightValue = 300;

// -- Stores a random rover-- //
let randomRover;
// -- Stores the chosen Random rover-- //
let chosenRandom;
// -- Stores the Martian day parameter (Sol) for the url -- //
let solParameter;
// -- Stores the URL value -- //
let url;

// -- Generic randomize function-- //
function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// --     DEFAULT VALUES displayed in the HTML     -- //
imagesToDisplayText.innerHTML = 5;
widthImageText.innerHTML = widthValue;
heightImageText.innerHTML = heightValue;

// --     EVENTS TO COLLECT USER INPUT ON RANGES     -- //
rangeImagesToDisplay.oninput = function() {
    imagesToDisplayText.innerHTML = this.value;
    picturesToDisplay = this.value;
    // I multiplied the user choice by 2 because the results always bring duplicates
    picturesToDisplay *= 2;
};

rangeWidthImage.oninput = function() {
    widthImageText.innerHTML = this.value;
    widthValue = this.value;
};

rangeHeightImage.oninput = function() {
    heightImageText.innerHTML = this.value;
    heightValue = this.value;
};

// --     FUNCTION TO SELECT ROVER (User choice)     -- //
function chooseRover(e) {
    const buttonTouched = e.target;
    spiritButton.classList.remove("btn-pressed");
    curiosityButton.classList.remove("btn-pressed");
    opportunityButton.classList.remove("btn-pressed");
    buttonTouched.classList.toggle("btn-pressed");
    chosenRover = e.target.id;
}

// --     FUNCTION TO TRIGGER DEFAULT SEARCH     -- //
searchButton.onclick = () => {
    solParameter = randomize(1000, 2000);
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${chosenRover}/photos?sol=${solParameter}&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc`;

    ajaxCall(url, widthValue, heightValue, picturesToDisplay, chosenRover, solParameter);
};

// --     FUNCTION TO TRIGGER RANDOM SEARCH     -- //
randomButton.onclick = () => {
    //  (1) we choose a random rover from the array
    randomRover = Math.floor(Math.random() * 3) + 1;
    chosenRandom = rovers[randomRover];
    solParameter = randomize(1000, 2000);
    url =
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${chosenRandom}/photos?sol=${solParameter}&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc`;

    ajaxCall( url, widthValue, heightValue, picturesToDisplay, chosenRandom, solParameter);
};

// --     CALL TO THE API TO RETRIEVE JSON DATA     -- //
function ajaxCall(url,widthValue,heightValue,picturesToDisplay,chosenRover,solParameter) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            processPicturesReceived(xmlHttp.responseText);
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);

    function processPicturesReceived(pictures) {
        const data = JSON.parse(pictures);
        photosContainer.innerHTML = "";
        photosDetails.innerHTML = "";
        console.log(data);
        if (data.photos.length > 8) {
            for (let i = 0; i < picturesToDisplay; i += 2) {
                const img = document.createElement("img");
                img.width = widthValue;
                img.height = heightValue;
                img.src = data.photos[i].img_src;
                img.style.margin = "1em 0";
                frag.appendChild(img);
            }

            photosContainer.append(frag);
            photosDetails.innerHTML = `Displaying pictures from ${chosenRover} on Martian solar day ${solParameter}`;
        } else {
            photosDetails.innerHTML = `No pictures from ${chosenRover} on day ${solParameter}, please hit the button again!`;
        }
    }

   
}
