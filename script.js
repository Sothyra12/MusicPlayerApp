/*
**Step 1
In this project you will learn basic string and array methods by building a music player app.
You will be able to play, pause, skip, and shuffle songs.
The HTML and CSS of this project have been provided for you, so you can focus on the JavaScript.
Start by accessing the #playlist-songs, #play, and #pause elements with the getElementById() method.
Assign them to variables playlistSongs, playButton and pauseButton respectively.


**Step 2
Access the #next, #previous and #shuffle elements from the HTML file.
Assign them to variables named nextButton, previousButton, and shuffleButton, respectively.


**Step 3
Next, create an array to store all the songs.
Create an empty allSongs array.


**Step 4
Inside the allSongs array, create an object with the following properties and values:
Example Code
id: 0,
title: "Scratching The Surface",
artist: "Quincy Larson",
duration: "4:25",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",


**Step 5
Add a second object with the following keys and values:
Example Code
id: 1,
title: "Can't Stay Down",
artist: "Quincy Larson",
duration: "4:15",
src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
*/

const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");
const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
    },
];