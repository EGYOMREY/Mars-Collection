var ourRequest = new XMLHttpRequest();
var rovers = ['opportunity', 'curiosity', 'spirit'];
var container = document.querySelector('.container');
var noElementsAvailable = document.querySelector('#noElementsAvailable');
var btn = document.querySelector('#btn');

// Function to randomize
function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var randomRover;
var solParameter;
var url;
var ourData;




btn.addEventListener('click', function() {

    randomRover = Math.floor(Math.random() * 2) + 0;
    console.log(rovers[randomRover]);
    solParameter = randomize(1000, 2000);
    url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rovers[randomRover] + '/photos?sol=' + solParameter + '&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc';
    console.log(url);

    ourRequest.open('GET', url);
    ourRequest.onload = function() {

        container.innerHTML = '';
        noElementsAvailable.innerHTML = '';
        ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});


function renderHTML(data) {
    if (ourData.photos.length) {

        for (var i = 0; i < 10; i += 2) {
            var img = document.createElement("img");
            img.width = "300";
            img.height = "300";
            img.src = ourData.photos[i].img_src;
            container.appendChild(img);
            console.log(container);
        }

    } else {
        console.log('errrriudhgiduhgdoigjdweeeeeeeeeeeeeeeeeeee');
        noElementsAvailable.innerHTML = "No pictures for the rover " + rovers[randomRover] + " on day " + solParameter + ", please hit the botton again!";
    }
}