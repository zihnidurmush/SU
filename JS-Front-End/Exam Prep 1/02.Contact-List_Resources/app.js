window.addEventListener("load", solve);

function solve() {
    // get inputs
    const nameInputElement = document.getElementById('name');
    const phoneInputElement = document.getElementById('phone');
    const categoryInputElement = document.getElementById('category');
    // get add button element
    const addButtonElement= document.getElementById('add-btn');
    
    // get ul list element
    const checklist = document.getElementById('check-list');
    
    // Attach add event
    addButtonElement.addEventListener('click', () => {
        // get input data
        const name = nameInputElement.value;
        const number = phoneInputElement.value;
        const category = categoryInputElement.value;
        
        // create checklist element
        const liElement = createCheckListElement(name, phoneNumber, category);



        // add elements to checklist
        // clear the inputs
    })
    
    
    
    
    
    function createCheckListElement(name, phoneNumber, category) {
        const pNameElement = document.createElement('p');
        pNameElement.textContent = `name: ${name}`;
        
        const pPhoneElement = document.createElement('p');
        pPhoneElement.textContent = `phone: ${phoneNumber}`;

        const pCategoryElement = document.createElement('p');
        pCategoryElement.textContent = `name: ${category}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pNameElement);
        articleElement.appendChild(pPhoneElement);
        articleElement.appendChild(pCategoryElement);

        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');

        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons');

        divButtons.append
    }
}
