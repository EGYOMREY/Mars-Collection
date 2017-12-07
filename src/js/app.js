$(document).ready(() => {
    'use strict';

    // --               VARIABLES USED              -- //
    var frag = document.createDocumentFragment();
    // -- Set a dummy element for position 0 -- //
    var rovers = ['dummy', 'opportunity', 'curiosity', 'spirit'];

    // -- Container for displaying the pictures -- //
    var photosContainer = $('.photosContainer');

    // -- Button to search for the pictures -- //
    var randomButton = $('#randomButton');
    var searchButton = $('#searchButton');

    // --       RANGE INPUT (User choice)        -- //
    // -- Range input for # of Pictures to display -- //
    var rangeImagesToDisplay = $('#rangeImagesToDisplay');
    // -- Range input to Select HEIGHT of the pictures -- //
    var rangeHeightImage = $('#rangeHeightImage');
    // -- Range input to Select WIDTH of the pictures -- //
    var rangeWidthImage = $('#rangeWidthImage');

    // --     RANGE VALUE DISPLAY for HTML     -- //
    var imagesToDisplayText = $('#imagesToDisplayText');
    var widthImageText = $('#widthImageText');
    var heightImageText = $('#heightImageText');

    // --     Rover Buttons     -- //
    var spiritButton = $('#spirit');
    var curiosityButton = $('#curiosity');
    var opportunityButton = $('#opportunity');
    // -- Default value -- //
    var chosenRover = 'curiosity';

    // --     DEFAULT VALUES FOR DEFAULT SEARCH     -- //
    var picturesToDisplay = 10;
    // -- Picture width -- //
    var widthValue = 300;
    // -- Picture height -- //
    var heightValue = 300;

    // -- Stores a random rover-- //
    var randomRover;
    // -- Stores the Martian day parameter (Sol) for the url -- //
    var solParameter;
    // -- Stores the URL value -- //
    var url;

    // -- Generic randomize function-- //
    function randomize(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    // --     DEFAULT VALUES displayed in the HTML     -- //
    imagesToDisplayText.html(5);
    widthImageText.html(widthValue);
    heightImageText.html(heightValue);



    // --     EVENTS TO COLLECT USER INPUT ON RANGES     -- //
    rangeImagesToDisplay.on('input', function() {
        imagesToDisplayText.html($(this).val());
        picturesToDisplay = $(this).val();
        // I multiplied the user choice by 2 because the results always bring duplicates
        picturesToDisplay *= 2;
    });

    rangeWidthImage.on('input', function() {
        widthImageText.html($(this).val());
        widthValue = $(this).val();
    });

    rangeHeightImage.on('input', function() {
        heightImageText.html($(this).val());
        heightValue = $(this).val();
    });


    // --     FUNCTION TO SELECT ROVER (User choice)     -- //
    $('.roverButton').click(function() {
        chosenRover = $(this)[0].id;

        if (spiritButton.hasClass('btn-pressed')) {
            spiritButton.removeClass('btn-pressed');
        } else if (curiosityButton.hasClass('btn-pressed')) {
            curiosityButton.removeClass('btn-pressed');
        } else if (opportunityButton.hasClass('btn-pressed')) {
            opportunityButton.removeClass('btn-pressed');
        }

        $(this).toggleClass('btn-pressed');

    });


    // --     FUNCTION TO TRIGGER DEFAULT SEARCH     -- //
    searchButton.on('click', function() {
        solParameter = randomize(1000, 2000);
        url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + chosenRover + '/photos?sol=' + solParameter + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';

        ajaxCall(url, widthValue, heightValue, picturesToDisplay, chosenRover, solParameter);

    });


    // --     FUNCTION TO TRIGGER RANDOM SEARCH     -- //
    randomButton.on('click', function() {
        //  (1) we choose a random rover from the array
        randomRover = Math.floor(Math.random() * 3) + 1;
        chosenRover = rovers[randomRover];
        solParameter = randomize(1000, 2000);
        url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + chosenRover + '/photos?sol=' + solParameter + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';

        ajaxCall(url, widthValue, heightValue, picturesToDisplay, chosenRover, solParameter);
    });




    // --     CALL TO THE API TO RETRIEVE JSON DATA     -- //
    function ajaxCall(url, widthValue, heightValue, picturesToDisplay, chosenRover, solParameter) {
        $.getJSON(url, {
                format: "json"
            })
            .done(data => {
                photosContainer.html('');
                console.log(`Rover ${chosenRover}. Martial Day ${solParameter} chosen`);
                if (data.photos.length) {

                    for (let i = 0; i < picturesToDisplay; i += 2) {
                        const img = document.createElement("img");
                        img.width = widthValue;
                        img.height = heightValue;
                        img.src = data.photos[i].img_src;
                        img.style.margin = "1em 0";
                        frag.appendChild(img);

                    }
                    photosContainer.append(frag);
                } else {
                    photosContainer.html(`No pictures for ${chosenRover} on day ${solParameter}, please hit the botton again!`);
                }
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log(`Rover ${chosenRover}. Martial Day ${solParameter} chosen`);
            });
    }
});