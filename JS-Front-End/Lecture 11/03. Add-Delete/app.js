function addItem() {
    // get element references
    const itemsElement = document.getElementById('items');
    const newItemTextElement = document.getElementById('newItemText');

    // create new element with text content of the input
    const liElement = document.createElement("li");
    liElement.textContent = newItemTextElement.value;

    // create delete button
    const deleteButton = document.createElement("a");
    deleteButton.textContent = '[Delete]';
    // deleteButton.href = '#';
    deleteButton.setAttribute('href', '#');

    // attach event to delete button
    deleteButton.addEventListener("click", (e) => {
        liElement.remove();                     // tight coupling       !Bad programming!
        e.currentTarget.parentElement.remove(); // loose coupling       !Good programming!
    });

    // add button to liElement
    liElement.append(deleteButton);

    // attach liElement to DOM
    itemsElement.append(liElement);

    // clean ip input
    newItemTextElement.value = '';
}
