function addItem() {
    
    // const inputTextElement = document.getElementById('newItemText');
    const inputTextElement = document.querySelector('#newItemText');
    // const inputValueElement = document.getElementById('newItemValue');
    const inputValueElement = document.querySelector('#newItemValue');
    const selectElement = document.querySelector('#menu');
    
    const optionElement = document.createElement('option');
    optionElement.value = inputValueElement.value;
    optionElement.textContent = inputTextElement.value;
    
    selectElement.appendChild(optionElement);
    
    inputTextElement.value = '';
    inputValueElement.value = '';
    
}
