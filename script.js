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


**Step 10
To handle the current song's information and track its playback time,
create a currentSong and songCurrentTime properties.
Set the values to null and 0 respectively.


**Step 11
In the previous projects, you used regular functions.
But in the rest of the projects, you will be working with arrow functions.
The next few steps will focus on teaching you the basics of arrow functions.
An arrow function is an anonymous function expression and a shorter way to write functions.
Anonymous means that the function does not have a name. Arrow functions are always anonymous.
Here is the basic syntax:
Example Code
() => {}
To create a named arrow function, you can assign the function to a variable:
Example Code
const exampleFunction = () => {
  // code goes here
}
Create a new named arrow function called printGreeting.
Inside the body of that function use the console.log() method to print the string "Hello there!".


**Step 13
Just like regular functions, arrow functions can accept multiple parameters.
Here is an example of a named arrow function with one parameter:
Example Code
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
If the function only has one parameter, you can omit the parentheses around the parameter
list like this:
Example Code
const greet = name => {
  console.log(`Hello, ${name}!`);
};
Create a new named arrow function called printMessage that has one parameter called org.
Inside the body of that function, add a console statement.
Inside that console statement, add the template literal ${org} is awesome!.
Below your printMessage function, call the function and pass in the string "freeCodeCamp"
as an argument.
Open up the console to see the result.


**Step 15
If the arrow function is returning a simple expression,
you can omit the return keyword and the curly braces {}.
This is called an implicit return.
Example Code
const multiplyTwoNumbers = (num1, num2) => num1 * num2;
If your arrow function has multiple lines of code in the function body,
then you need to use the return keyword and the curly braces {}.
Example Code
const getTax = (price) => {
  const taxRate = 0.08;
  const tax = price * taxRate;
  return tax;
};
Refactor, or update, your addTwoNumbers function to remove the return keyword and the curly braces {}.
Your addTwoNumbers function should instead use an implicit return.
Open up the console to make sure that you are still getting the correct output.


**Step 16
Now it is time to apply what you have learned about arrow functions to your music player project.
Start by removing the printGreeting, printMessage, and addTwoNumbers functions.
Also, remove all of the console statements and function calls.


**Step 17
To display the songs in the UI (User Interface), you'll need to create a function.
Use the arrow function syntax to create a renderSongs function that takes in array as its parameter.


**Step 18
When the songs are displayed on the page, it should show the title, artist,
duration of each song and a delete button.
In the next few steps, you will learn how to add new HTML for each song using the map() method.
This method will be explained in more detail in the next step.
Start by using const to declare a variable named songsHTML and assign it array.map().


**Step 19
The map() method is used to iterate through an array and return a new array.
It's helpful when you want to create a new array based on the values of an existing array.
For example:
Example Code
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((number) => number * 2); // doubledNumbers will be [2, 4, 6]
Notice that the map() method takes a function as an argument.
This is called a callback function, which is a function that is passed to
another function as an argument. In the example above, the callback function is
(number) => number * 2, and it's run on each element in the numbers array.
The map() method then returns a new array with the results.
Pass in a callback function to the map() method.
The callback function should take song as a parameter,
use the arrow function syntax, and have an empty body.


**Step 20
Inside the map(), add a return statement with backticks where you will
interpolate all the elements responsible to displaying the song details.
Inside the backticks, create an li element with an id attribute of song-${song.id}
and a class attribute of playlist-song


**Step 22
Inside the button element, create two more span elements.
The first span element should have a class of playlist-song-artist.
In between the span tags, add ${song.artist}.
The second span element should have a class of playlist-song-duration.
In between the span tags, add ${song.duration}.


**Step 24
Right now the songsHTML is an array.
If you tried to display this as is, you would see the songs separated by commas.
This is not the desired outcome because you want to display the songs as a list.
To fix this, you will need to join the array into a single string by using the join() method.
The join() method is used to concatenate all the elements of an array into a single string.
It takes an optional parameter called a separator which is used to separate each element of the array.
For example:
const exampleArr = ["This", "is", "a", "sentence"];
const sentence = exampleArr.join(" "); // Separator takes a space character
console.log(sentence); // Output: "This is a sentence"
Chain the join() method to your map() method and pass in an empty string for the separator.
To chain multiple methods together, you can call the join() method on the result of the map() method.
For example:
array.map().join();


**Step 25
Next, you will need to update the playlist in your HTML document to display the songs.
Assign songsHTML to the innerHTML property of the playlistSongs element.
This will insert the li element you just created into the ul element in the already providedHTML file.


**Step 26
Now you need to call the renderSongs function and pass in userData?.
songs in order to finally display the songs in the UI.
Optional chaining (?.) helps prevent errors when accessing
nested properties that might be null or undefined. For example:

Example Code
const user = {
  name: "Quincy",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};

// Accessing nested properties without optional chaining
const state = user.address.state; // CA

// Accessing a non-existent nested property with optional chaining
const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error
Call the renderSongs function with the songs property of userData.
This will render the songs in the playlist.
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
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

const renderSongs = (array) => {
  const songsHTML = array.map((song) => {
    return `<li id="song-${song.id}" class="playlist-song">
    <button class="playlist-song-info">
      <span class="playlist-song-title">${song.title}</span>
      <span class="playlist-song-artist">${song.artist}</span>
      <span class="playlist-song-duration">${song.duration}</span>
    </button>
    <button class="playlist-song-delete" aria-label="Delete ${song.title}">
      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
    </button>
  </li>`;
  }).join("");
  playlistSongs.innerHTML = songsHTML;
}

renderSongs(userData?.songs);

// const printGreeting = () => {
//     console.log("Hello there!");
//   };
// printGreeting();

// const printMessage = (org) => {
//     console.log(`${org} is awesome!`);
//   }
// printMessage("freeCodeCamp");


// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
//   }

// console.log(addTwoNumbers(3,4));

// const addTwoNumber = (num1, num2) => num1 + num2;
// console.log(addTwoNumber(5,6));