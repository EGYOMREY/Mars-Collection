# Mars-Collection Project
Using the NASA's [Mars Rover Photos API](https://api.nasa.gov/api.html#MarsPhotos), display photos taken by NASA's Curiosity, Opportunity, and Spirit rovers. [Try it out](https://egyomrey.github.io/Mars-Collection/build/index.html) :arrow_upper_right:

## Desktop
![image](https://i.imgur.com/MtQB7Bq.png)

## Mobile
![image](https://i.imgur.com/nF8GFEe.png)


## Functionality:
For regular search:
- Choose the rover who took the picture: Curiosity, Spirit or Opportunity.
- Choose how many pictures to display between 1 and 12.
- Choose the height*width of the pictures

For Random search:
The only customizable option is the height*width

## How to use this project
- To **clone** this repository with Git type in your console `git clone https://github.com/EGYOMREY/Portfolio.git`
- You can also **download** the code by pressing the button **Clone or Download** and then **Download ZIP**

All the source code is in the `src` folder, the minified and compressed version is in the `build` folder

- To open it, go to the project's folder, then in the `build` folder execute the index.html file.

If you'd like to work on this project (and use Gulp), after downloading or cloning it, go to the project's folder location with your console and 

1. Type `npm install` so you can work with the dependencies I used for developing it. (wait for the installation to complete)
2. Type `gulp` in the console and a new browser window will open pointing to your `localhost:3000` 
3. You can start working with the files located in the `src` folder. Open it with your text editor.

Gulp will refresh the browser with any saved change done in `src`, and also will output the minified and compressed version in the `build` folder.

## What I used:

- Gulp for automated tasks
- ES6
- SCSS

### Special thanks
To [@chrisccerami](https://twitter.com/chrisccerami) for maintaining this amazing API in this [repository](https://github.com/chrisccerami/mars-photo-api).

To [Styling Cross-Browser Compatible Range Inputs with Sass / SCSS](https://github.com/darlanrod/input-range-scss) for the compatible range input.


### Motivation
I was looking for an interesting API to work on and I learned that the [NASA's API Repository](https://api.nasa.gov/api.html) offered several amazing APIs with cool information to display. Since Mars 2020 rover mission is not that far away and you don't see pictures from Mars every day, I thought it would be interesting to display them in an interactive way. I think it can also help people remember that there have been more than 1 rover in Mars and there's plenty of information out there of their missions.
