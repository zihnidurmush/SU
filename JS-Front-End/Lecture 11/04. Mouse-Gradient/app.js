function attachGradientEvents() {
    // get element references
    const resultElement = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');
    
    // attach mouse event
    gradientElement.addEventListener('mousemove', (e) => {
    const currentPosition = e.offsetX;
    const elementWidth = e.currentTarget.clientWidth; 

    const percent = Math.floor((currentPosition / elementWidth) * 100);   
            
    resultElement.textContent = `${percent}%`;
    });
    
}
