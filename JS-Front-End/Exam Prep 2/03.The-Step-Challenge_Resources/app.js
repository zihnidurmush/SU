const base_url = "http://localhost:3030/jsonstore/records";

const loadRecordsButtonElement = document.getElementById("load-records");
const recordsListElement = document.getElementById("list");
// const baseListItemRecord = document.querySelector('#list .record:nth-child(1)');
const addRecordsButtonElement = document.getElementById("add-record");
const editRecordsButtonElement = document.getElementById("edit-record");
const formElement = document.getElementById('form');

// input elements
const nameInputElement = document.getElementById("p-name");
const stepsInputElement = document.getElementById("steps");
const caloriesInputElement = document.getElementById("calories");

const BASE_FETCH_OPTIONS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
};

async function fetchData(url, options) {
    return fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.text);
        }
        return response.json();
    })
    .then((data) => {
        return { data, error: null };
    })
    .catch((error) => {
        console.log(error);
        return { data: null, error };
    });
}

function loadRecordsHandler() {
    fetchData(base_url, BASE_FETCH_OPTIONS).then(({ data, error }) => {
        if (error) {
            return;
        }
        
        const records = Object.values(data);
        
        recordsListElement.innerHTML = "";
        
        records.forEach(({ name, steps, calories, _id }) => {
            // // // alternatively - cloning the HTML structure
            // const clone = baseListItemRecord.cloneNode(true);
            
            // clone.querySelector('.record p:nth-child(1)').textContent = name;
            // clone.querySelector('.record p:nth-child(2)').textContent = steps;
            // clone.querySelector('.record p:nth-child(3)').textContent = calories;
            
            // recordsListElement.appendChild(clone);
            
            const nameParagraphElement = document.createElement("p");
            nameParagraphElement.textContent = name;
            const stepsParagraphElement = document.createElement("p");
            stepsParagraphElement.textContent = steps;
            const caloriesParagraphElement = document.createElement("p");
            caloriesParagraphElement.textContent = calories;
            
            const infoDivElement = document.createElement("div");
            infoDivElement.classList.add("info");
            
            infoDivElement.appendChild(nameParagraphElement);
            infoDivElement.appendChild(stepsParagraphElement);
            infoDivElement.appendChild(caloriesParagraphElement);
            
            const changeButtonElement = document.createElement("button");
            changeButtonElement.classList.add("change-btn");
            changeButtonElement.textContent = "Change";
            const deleteButtonElement = document.createElement("button");
            deleteButtonElement.classList.add("delete-btn");
            deleteButtonElement.textContent = "Delete";
            
            // ADDING CLICK EVENT TO THE EDIT BUTTON ---->> this is for EDIT part
            changeButtonElement.addEventListener('click', () => {
                formElement.setAttribute('data-record-id', _id);
                
                nameInputElement.value = name;
                stepsInputElement.value = steps;
                caloriesInputElement.value = calories;
                
                addRecordsButtonElement.setAttribute('disabled', 'disabled');
                editRecordsButtonElement.removeAttribute('disabled');
                
            });
            // ADDING CLICK EVENT TO THE EDIT BUTTON ---->> this is for EDIT part
            
            // ADDING CLICK EVENT TO THE DELETE BUTTON ---->> this is for DELETE part
            deleteButtonElement.addEventListener("click", () => {
                const deleteOptions = {
                    ...BASE_FETCH_OPTIONS,
                    method: "DELETE",
                };
                
                const deleteUrl = `${base_url}/${_id}`;
                
                fetchData(deleteUrl, deleteOptions).then(({ error }) => {
                    if (error) {
                        return;
                    }
                    loadRecordsHandler();
                });
            });
            // ADDING CLICK EVENT TO THE DELETE BUTTON ---->> this is for delete part
            
            const buttonWrapperDivElement = document.createElement("div");
            buttonWrapperDivElement.classList.add("btn-wrapper");
            buttonWrapperDivElement.appendChild(changeButtonElement);
            buttonWrapperDivElement.appendChild(deleteButtonElement);
            
            const liElement = document.createElement("li");
            liElement.classList.add("record");
            liElement.appendChild(infoDivElement);
            liElement.appendChild(buttonWrapperDivElement);
            
            recordsListElement.appendChild(liElement);
        });
    });
}

function createRecordHandler() {
    const { value: name } = nameInputElement;
    // const name = nameInputElement.value;
    const { value: steps } = stepsInputElement;
    const { value: calories } = caloriesInputElement;
    
    if (!name || !steps || !calories) {
        return;
    }
    
    const options = {
        ...BASE_FETCH_OPTIONS,
        method: "POST",
        body: JSON.stringify({ name, steps, calories }),
    };
    
    nameInputElement.value = "";
    stepsInputElement.value = "";
    caloriesInputElement.value = "";
    
    fetchData(base_url, options).then(({ error }) => {
        if (error) {
            return;
        }
        
        loadRecordsHandler();
    });
}

function editRecordHandler() {
    const _id = formElement.getAttribute('data-record-id');
    
    const { value: name } = nameInputElement;
    // const name = nameInputElement.value;
    const { value: steps } = stepsInputElement;
    const { value: calories } = caloriesInputElement;
    
    const putUrl = `${base_url}/${_id}`;
    
    const putOptions = {
        ...BASE_FETCH_OPTIONS,
        method: 'PUT',
        body: JSON.stringify({ name, steps, calories, _id })
    };
    
    nameInputElement.value = "";
    stepsInputElement.value = "";
    caloriesInputElement.value = "";
    
    fetchData(putUrl, putOptions).then(({ error }) => {
        if (error) {
            return;
        }

        loadRecordsHandler();

        formElement.removeAttribute('data-record-id');
        addRecordsButtonElement.removeAttribute('disabled');
        editRecordsButtonElement.setAttribute('disabled', 'disabled')
    })
}

window.addEventListener("DOMContentLoaded", loadRecordsHandler);

loadRecordsButtonElement.addEventListener("click", loadRecordsHandler);
addRecordsButtonElement.addEventListener("click", createRecordHandler);
editRecordsButtonElement.addEventListener("click", editRecordHandler);
