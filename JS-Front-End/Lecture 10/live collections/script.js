const movieListElement = document.getElementById('movies');

const liveElementsCollection = movieListElement.children;   // Returns live HTML collection

const liveNodeList = movieListElement.childNodes;           // Returns live Node list

const staticNodeList = document.querySelectorAll('#movies li'); // Returns all 'li' elements in the element with movie id

setTimeout(() => {
    const movieLiElement = document.createElement('li');
    movieLiElement.textContent = 'Case for Christ';
    movieListElement.appendChild(movieLiElement);

    console.log(liveElementsCollection);
    console.log(liveNodeList);
    console.log(staticNodeList);
}, 3000);


