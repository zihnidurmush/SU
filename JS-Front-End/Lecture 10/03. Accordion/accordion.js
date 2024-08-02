function toggle() {
    const extraInformationELement = document.getElementById('extra');
    const toggleButtonElement = document.querySelector('.head span.button');
    
    const currentButtonText = toggleButtonElement.textContent;
    if (currentButtonText === 'More') {
        extraInformationELement.style.display = 'block';
        toggleButtonElement.textContent = 'Less';
    } else {
        extraInformationELement.style.display = 'none';
        toggleButtonElement.textContent = 'More';
    }
}
