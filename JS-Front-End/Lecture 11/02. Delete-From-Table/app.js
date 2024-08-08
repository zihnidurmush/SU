function deleteByEmail() {
    // get input, result and table element references
    const customerTableElement = document.getElementById('customers');
    const inputElement = document.querySelector('input[type=text][name=email]')
    const resultElement = document.getElementById('result');
    
    // get input text value
    const searchEmail = inputElement.value;
    
    // get all td elements
    const tdElements = customerTableElement.querySelectorAll('tbody td:last-child');
    
    // search for email
    const searchElement = Array.from(tdElements).find(el => el.textContent === searchEmail);
    
    // remove element if found
    if (searchElement) {
        searchElement.parentElement.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
}
