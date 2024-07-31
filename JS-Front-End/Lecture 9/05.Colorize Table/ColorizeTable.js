function colorize() {
    // // Solution 1 - with iteration
    // const tableElement = document.querySelector('table tbody');
    // const tableRowElements = tableElement.children;

    // for (let i = 0; i < tableRowElements.length; i += 2) {
    //     tableRowElements[i].style.backgroundColor = 'teal';
    // }

    // Solution 2 - with CSS selector
    const evenTableRowElements = document.querySelectorAll('table tbody tr:nth-child(even)')

    for (const trElement of evenTableRowElements) {
        trElement.style.backgroundColor = 'teal';
    }
}
