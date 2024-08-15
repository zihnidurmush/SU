window.addEventListener("load", solve);

function solve() {
    
    // 1. Getting the information from the form
    const adoptButtonElement = document.getElementById('adopt-btn');
    
    // getting info from the input fields
    const typeInputElement = document.getElementById('type');
    const ageInputElement = document.getElementById('age');
    const genderInputElement = document.getElementById('gender');
    
    const adoptionInfoListElement = document.getElementById('adoption-info');
    const adoptedListElement = document.getElementById('adopted-list');
    
    function clearInputFields() {
        typeInputElement.value = '';
        ageInputElement.value = '';
        genderInputElement.value = '';
    }
    
    
    function createArticleElement() {
        const articleElement = document.createElement('article');
        
        // creating paragraph elements creating and assigning values from input elements
        const typeParagraphElement = document.createElement('p');
        typeParagraphElement.textContent = `Pet:${typeInputElement.value}`;
        
        // creating paragraph elements creating and assigning values from input elements
        const genderParagraphElement = document.createElement('p');
        genderParagraphElement.textContent = `Gender:${genderInputElement.value}`;
        
        // creating paragraph elements creating and assigning values from input elements
        const ageParagraphElement = document.createElement('p');
        ageParagraphElement.textContent = `Age:${ageInputElement.value}`;
        
        // appending the paragraph to the article element
        articleElement.appendChild(typeParagraphElement);
        articleElement.appendChild(genderParagraphElement);
        articleElement.appendChild(ageParagraphElement);
        
        return articleElement;
    }
    
    function createButtonElements() {
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons');
        
        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.textContent = 'Edit';
        
        const doneButton = document.createElement('button');
        doneButton.classList.add('done-btn');
        doneButton.textContent = 'Done';
        
        buttonsContainer.appendChild(editButton);
        buttonsContainer.appendChild(doneButton);
        
        
        return {
            buttonsContainer, 
            editButton, 
            doneButton,
        } 
    }
    
    function createClearButton(liElement) {
        const clearButton = document.createElement('button');
        clearButton.classList.add('clear-btn');
        clearButton.textContent = 'Clear';
        clearButton.addEventListener('click', () => liElement.remove());
        
        return clearButton;
    }
    
    function createAnimalListItem() {
        // creating li and article elements
        const liElement = document.createElement('li');
        const articleElement = createArticleElement();
        const { buttonsContainer, doneButton, editButton } = createButtonElements();
        
        editButton.addEventListener('click', () => {
            liElement.remove();
            
            const [, type] = liElement.querySelector('p:nth-child(1)').textContent.split(':');
            const [, gender] = liElement.querySelector('p:nth-child(2)').textContent.split(':');
            const [, age] = liElement.querySelector('p:nth-child(3)').textContent.split(':');
            
            typeInputElement.value = type;
            genderInputElement.value = gender;
            ageInputElement.value = age;
        });
        
        doneButton.addEventListener('click', () => {
            liElement.remove();
            buttonsContainer.remove();
            
            const clearButton = createClearButton(liElement);
            liElement.appendChild(clearButton);
            
            adoptedListElement.appendChild(liElement);
        });
        
        // appending article and buttons elements to the li element
        liElement.appendChild(articleElement);
        liElement.appendChild(buttonsContainer);
        
        // appending li element to the adoption-info ul element
        adoptionInfoListElement.appendChild(liElement);
        clearInputFields();  
    }
    
    function onAdoptClickHandler(event) {
        event.preventDefault();
        
        createAnimalListItem();
    }

    adoptButtonElement.addEventListener('click', onAdoptClickHandler);
} 

// // 1. Getting the information from the form
// // get inputs
// const petInput = document.getElementById('type');
// const ageInput = document.getElementById('age');
// const genderInput = document.getElementById('gender');

// // get adopt button element
// const adoptButtonElement= document.getElementById('adopt-btn');

// // get ul list element
// const adoptionInfo = document.getElementById('adoption-info');

// // Attach add event
// adoptButtonElement.addEventListener('click', () => {
    //     // get input data
//     const pet = petInput.value;
//     const gender = genderInput.value;
//     const age = ageInput.value;

//     // create checklist element
//     const liElement = createCheckListElement(pet, age, gender);

//     // add elements to checklist
//     adoptionInfo.appendChild(liElement);

//     console.log(liElement);

//     // clear the inputs
//     clearInputs();
// })

// // function clearInputs() {
// //     petInput.value = '';
// //     ageInput.value = '';
// //     genderInput.value = '';
// // }
// // name, phoneNumber, category
// function createCheckListElement(pet, age, gender) {
//     const pPetElement = document.createElement('p');
//     pPetElement.textContent = `pet:${pet}`;

//     const pAgeElement = document.createElement('p');
//     pAgeElement.textContent = `age:${age}`;

//     const pGenderElement = document.createElement('p');
//     pGenderElement.textContent = `gender:${gender}`;

//     const articleElement = document.createElement('article');
//     articleElement.appendChild(pPetElement);
//     articleElement.appendChild(pAgeElement);
//     articleElement.appendChild(pGenderElement);

//     const editButton = document.createElement('button');
//     editButton.classList.add('edit-btn');

//     const doneButton = document.createElement('button');
//     doneButton.classList.add('done-btn');

//     const divButtons = document.createElement('div');
//     divButtons.classList.add('buttons');
//     divButtons.appendChild(editButton);
//     divButtons.appendChild(doneButton);

//     const liElement = document.createElement('li');
//     liElement.appendChild(articleElement);
//     liElement.appendChild(divButtons);

//     // editButton.addEventListener('click', () => {
    //     //     // get data of selected number (of there are 2 numbers)
//     //     // set inputs 
//     //     petInput.value = pet;
//     //     ageInput.value = age;
//     //     genderInput.value = gender;


//     //     // remove checklist element
//     //     liElement.remove(); 
//     // });

//     // doneButton.addEventListener('click', () => {
    //     //     // remove edit and save buttons
//     //     divButtons.remove();

//     //     //create delete button
//     //     const clearButton = document.createElement('button');
//     //     clearButton.classList.add('clear-btn');

//     //     clearButton.addEventListener('click', () => {
    //     //         liElement.remove();
//     //     });


//     //     // add delete buttons
//     //     liElement.appendChild(clearButton);

//     //     // move to contact list
//     //     contactList.appendChild(liElement);
//     // })

//     return liElement;
// }



