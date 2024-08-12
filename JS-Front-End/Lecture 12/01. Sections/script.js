function create(words) {
    const contentElement = document.getElementById('content');
    
    // Create div with paragraph
    const divElements = words.map(word => {
        const pElement = document.createElement('p');       // Crate paragraph
        pElement.textContent = word;                        // Add text content
        pElement.style.display = 'none';                    // Hide paragraph
        
        const divElement  = document.createElement('div');  // Create div
        divElement.appendChild(pElement);                   // Append paragraph to div
        
        // divElement.addEventListener('click', () => {        // Show paragraph on div click
        //     pElement.style.display = 'block';
        // });
        
        return divElement;                                  // Return div
    });
    
    // Attach multiple event listeners without event delegation
    // Show paragraph on div click
    // divElements.forEach(divElement => {
        //     divElement.addEventListener('click', () => {
            //         const pElement = divElement.querySelector('p');
    //         pElement.style.display = 'block';
    //     })
    // });
    
    // With event delegation
    
    
    // Append all to DOM
    // contentElement.append(...divElements);   // preferred code
    // divElements.forEach(divElement => contentElement.appendChild(divElement)); // not efficient code
    
    // using document fragment
    const divElementsFragment = document.createDocumentFragment();
    divElements.forEach(divElement => divElementsFragment.appendChild(divElement));
    
    contentElement.appendChild(divElementsFragment);
    
    // Attach 'multiple 'events using delegation
    contentElement.addEventListener('click', (e) => {
        if (e.target.tagName === 'DIV') {
            const pElement = e.target.querySelector('p');
            pElement.style.display = 'block';
        }
    });
}
