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


**Step 7
We've added the rest of the songs to the allSongs array for you.
Next, you'll learn about the Web Audio API and how to use it to play songs.
All modern browsers support the Web Audio API, which lets you generate and process audio in web applications.
Use const to create a variable named audio and set it equal to new Audio().
This will create a new HTML5 audio element.


**Step 8
Your music player should keep track of the songs,
the current song playing, and the time of the current song.
To do this, you will need to create an object to store this information.
Start by using the let keyword to declare a new variable called userData
and assign it an empty object.


**Step 9
Since users will be able to shuffle and delete songs from the playlist,
you will need to create a copy of the allSongs array without mutating the original.
This is where the spread operator comes in handy.
The spread operator (...) allows you to copy all elements from one array into another.
It can also be used to concatenate multiple arrays into one. In the example below,
both arr1 and arr2 have been spread into combinedArr:
Example Code
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
Inside the userData object create a songs property.
For the value, spread allSongs into an array.
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
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
    },
];

const audio = new Audio();
let userData = {

};