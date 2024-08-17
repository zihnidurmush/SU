// 1. Setting the base url
const baseUrl = 'http://localhost:3030/jsonstore/tasks';

// 1.1 create load meal button
const loadButtonElement = document.getElementById('load-meals');

// 1.2.2 creating meal list element
const mealListElement = document.getElementById('list');

// 1.3 create add button and edit button
const addButtonElement = document.getElementById('add-meal');
const editButtonElement = document.getElementById('edit-meal');

// 1.4.1 get input data
const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

// 1.6.1 save current item (meal) id
let currentMealId = null;

// const formElement = document.getElementById('form'); // transfer id using form element


// 1.4.3 we modify the event listener of load button,
// we transform the function to arrow function
// to use it later in 1.4.3
const loadMeals = async () => {
    // 1.2.1 Fetch all meals
    const response = await fetch(baseUrl);
    const data = await response.json();
    
    // 1.2.2 clear mealListElement 
    mealListElement.innerHTML = '';
    
    // 1.2.3 create meal element for each meal
    for (const meal of Object.values(data)) {
        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-meal');
        changeButtonElement.textContent = 'Change';
        
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-meal');
        deleteButtonElement.textContent = 'Delete';
        
        const buttonsContainerElement = document.createElement('div');
        buttonsContainerElement.id = 'meal-buttons';
        buttonsContainerElement.appendChild(changeButtonElement);
        buttonsContainerElement.appendChild(deleteButtonElement);
        
        const foodH2Element = document.createElement('h2');
        foodH2Element.textContent = meal.food;
        const timeH3Element = document.createElement('h3');
        timeH3Element.textContent = meal.time;
        const caloriesH3Element = document.createElement('h3');
        caloriesH3Element.textContent = meal.calories;
        
        const mealDivElement = document.createElement('div');
        mealDivElement.classList.add('meal');
        mealDivElement.appendChild(foodH2Element);
        mealDivElement.appendChild(timeH3Element);
        mealDivElement.appendChild(caloriesH3Element);
        mealDivElement.appendChild(buttonsContainerElement);
        
        mealListElement.appendChild(mealDivElement); //Attach to meals DOM
        
        // 1.5 Attach event listener to the change button
        changeButtonElement.addEventListener('click', () => {
            // 1.5.1 save current item (meal) id
            currentMealId = meal._id;
            // formElement.setAttribute('data-id', meal._id) // transfer id using form element
            
            // 1.5.1 get data and populate input fields
            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            caloriesInputElement.value = meal.calories;
            
            // 1.5.2 activate edit button
            editButtonElement.removeAttribute('disabled');
            
            // 1.5.4 deactivate add button
            addButtonElement.setAttribute('disabled', 'disabled');
            
            // 1.5.2 remove from list
            mealDivElement.remove();
        })
        
        // 1.7 Attach event listener to the delete button
        deleteButtonElement.addEventListener('click', async () => {
            // 1.7.1 delete http request
            const response = await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE'
            });
            
            // 1.7.2 remove from list
            mealDivElement.remove();
        })
        
    }
};

// 1.2 add event listener to the LOAD button
// this is transformed to arrow function see 1.4.3 (right above)
loadButtonElement.addEventListener('click', loadMeals); 

// 1.4 add event listener to the ADD button
addButtonElement.addEventListener('click', async () => {
    // 1.4.1 get input data
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;
    
    // 1.4.2 create post request
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ food, time, calories }),
    });
    
    if (!response.ok) { // checking if creation is successful 
        return;
    }
    
    // 1.4.3 clear input fields
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
    
    // 1.4.4 load all meals
    await loadMeals();
});

// 1.5 continue in array function loadMeals() => go to 1.4.3

// 1.6 add event listener to EDIT button
editButtonElement.addEventListener('click', async () => {
    // 1.6.1 get data from inputs
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;
    
    // get meal id
    // const mealId = formElement.getAttribute('data-id'); // transfer id using form element
    
    // 1.6.2 make a 'PUT' request
    // const response = await fetch(`${baseUrl}/${mealId}`, { // transfer id using form element
    const response = await fetch(`${baseUrl}/${currentMealId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: currentMealId, food, time, calories })
        // body: JSON.stringify({ _id: mealId, food, time, calories }) // transfer id using form element
    });
    
    if (!response.ok) { // checking if request is successful 
        return;
    }
    
    // 1.6.3 fetch items (load meals) again
    loadMeals();
    
    // 1.6.4 deactivate edit button
    editButtonElement.setAttribute('disabled', 'disabled');
    
    // 1.6.5 activate add button
    addButtonElement.removeAttribute('disabled');
    
    // 1.6.7 clear currentMealId
    currentMealId = null;
    // formElement.removeAttribute('data-id'); // transfer id using form element
    
    // 1.6.8 clear input fields
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
});
