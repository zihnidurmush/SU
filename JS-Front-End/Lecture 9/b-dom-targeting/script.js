
// Target element - by id
const movieListElement = document.getElementById('movie-list');
// console.log(movieListElement);

// Target element - by class name
const headingElements = document.getElementsByClassName('heading');
// console.log(headingElements[0]); // can be accessed by index

for (const headingElement of headingElements) { 
    // console.log(headingElement); // can be iterated when selected by class name
}

// Target element - by tag name
const movieListElements = document.getElementsByTagName('li'); //Returns live HTML collection
// console.log(movieListElements);

// Target element - by CSS selector
// const favouriteMovieElement = document.querySelector('#movie-list li:first-of-type');
const favouriteMovieElement = document.querySelector('#movie-list li:first-child'); //Returns single element
console.log(favouriteMovieElement.textContent);

const allMovieElements = document.querySelectorAll('#movie-list li'); // Returns static node list
console.log(allMovieElements); // Access by index or iterate with for-of

const liveNodeList = movieListElements.childNodes; // Returns live NodeList;

// Convert NodeList or HTML collection to array
const allMovieElementsArray = Array.from(allMovieElements);
console.log(allMovieElementsArray); // can use filter, map or any method of array

const allMovieElementsArrayWithSpreadOperator = [...allMovieElements]; // equivalent to array.from
console.log(allMovieElementsArrayWithSpreadOperator); // spreads the elements in the NodeList to array elements

// First <ul> on the page
const list = document.getElementsByTagName('ul')[0];

// Third <li> inside the selected <ul>
const thirdLi = document.getElementsByTagName('li')[2];

// Third <li> inside the first <ul> on the page
const thirdLi2 = document.querySelector('ul li:nth-child(3)');
