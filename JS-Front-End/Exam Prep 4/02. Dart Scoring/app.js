window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    
    const playerInputElement = document.getElementById('player');
    const scoreInputElement = document.getElementById('score');
    const roundInputElement = document.getElementById('round');
    
    const sureListElement = document.getElementById('sure-list');
    const scoreboardListElement = document.getElementById('scoreboard-list');
    const clearButtonElement = document.querySelector('.btn.clear');

    addButtonElement.addEventListener('click', () => {
        const playerName = playerInputElement.value;
        const score = scoreInputElement.value;
        const round = roundInputElement.value;
        
        if (!playerName || !score || !round) {
            return;
        }
        
        const pNameElement = document.createElement('p');
        pNameElement.textContent = `${playerName}`;
        const pScoreElement = document.createElement('p');
        pScoreElement.textContent = `Score: ${score}`;
        const pRoundElement = document.createElement('p');
        pRoundElement.textContent = `Round: ${round}`;
        
        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('btn', 'edit');
        editBtnElement.textContent = 'edit';
        const okBtnElement = document.createElement('button');
        okBtnElement.classList.add('btn', 'ok');
        okBtnElement.textContent = 'ok';
        
        const articleElement = document.createElement('article');
        articleElement.appendChild(pNameElement);
        articleElement.appendChild(pScoreElement);
        articleElement.appendChild(pRoundElement);
        
        const liElement = document.createElement('li');
        liElement.classList.add('dart-item');
        liElement.appendChild(articleElement);
        liElement.appendChild(editBtnElement);
        liElement.appendChild(okBtnElement);
        
        sureListElement.id = 'sure-list';
        sureListElement.appendChild(liElement);
        
        addButtonElement.setAttribute('disabled', 'disabled');
        
        playerInputElement.value = '';
        scoreInputElement.value = '';
        roundInputElement.value = '';
        
        const editButtonElement = liElement.querySelector('.btn.edit');
        const okButtonElement = liElement.querySelector('.btn.ok');
        
        editButtonElement.addEventListener('click', () => {
            playerInputElement.value = playerName;
            scoreInputElement.value = score;
            roundInputElement.value = round;
            
            liElement.remove();
            
            addButtonElement.removeAttribute('disabled');
        });
        
        okButtonElement.addEventListener('click', () => {
            const scoreEdtButtonElement = liElement.querySelector('.btn.edit');
            scoreEdtButtonElement.remove();
            const scoreOButtonElement = liElement.querySelector('.btn.ok');
            scoreOButtonElement.remove();
        
            scoreboardListElement.appendChild(liElement);
            addButtonElement.removeAttribute('disabled');
        });

        clearButtonElement.addEventListener('click', () => {
            scoreboardListElement.innerHTML = '';
        });
    });
}
