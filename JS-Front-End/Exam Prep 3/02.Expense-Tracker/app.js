window.addEventListener("load", solve);

function solve() {
    // 1. Getting the information from the form
    const addButtonElement = document.getElementById('add-btn');
    
    // 2. getting info from the input fields
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    
    // 6. create preview list element
    const previewListElement = document.getElementById('preview-list');

    // 11. create expenses list element
    const expensesListElement = document.getElementById('expenses-list');

    // 12. get delete button element
    const deleteButtonElement = document.querySelector('.btn.delete');
    
    // 3. add event listener to the addBtnElement
    addButtonElement.addEventListener('click', () => {
        // 4. get input information
        const expense = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;
        
        // 5. check if inputs are non-empty strings
        if (!expense || !amount || !date) {
            return;
        }
        
        // 6. add to preview list
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`;
        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`;
        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;
        
        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);
        
        const editBtnElement = document.createElement('button');
        editBtnElement.classList.add('btn', 'edit');
        editBtnElement.textContent = 'edit';
        const okBtnElement = document.createElement('button');
        okBtnElement.classList.add('btn', 'ok');
        okBtnElement.textContent = 'ok';
        
        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editBtnElement);
        buttonsDivElement.appendChild(okBtnElement);
        
        const liExpenseElement = document.createElement('li');
        liExpenseElement.classList.add('expense-item')
        liExpenseElement.appendChild(articleElement);
        liExpenseElement.appendChild(buttonsDivElement);
        
        previewListElement.appendChild(liExpenseElement);
        
        // 7. disable add button
        addButtonElement.setAttribute('disabled', 'disabled');
        
        // 8. clear inputs
        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';
        
        // 9. get button elements
        const editButtonElement = liExpenseElement.querySelector('.btn.edit');
        const okButtonElement = liExpenseElement.querySelector('.btn.ok');
        
        // 10. Attach event listener to the edit button 
        editButtonElement.addEventListener('click', () => {
            // 10.1 is only a comment in the end of the codes

            // 10.2 send back data to the table
            expenseInputElement.value = expense;
            amountInputElement.value = amount;
            dateInputElement.value = date;

            // 10.2 clear inputs
            liExpenseElement.remove();
            
            // 10.3 enable add button 
            addButtonElement.removeAttribute('disabled');   
        });
        
        // 11. Attach event listener to the ok button
        okButtonElement.addEventListener('click', () => {
            // 11.1 remove buttons from expense item
            const expenseButtonElement = liExpenseElement.querySelector('.buttons');
            expenseButtonElement.remove();
            // 11.2 move expense item to expense list
            expensesListElement.appendChild(liExpenseElement);

            // 11.3 enable add button 
            addButtonElement.removeAttribute('disabled');   
        });

        // 12. Attach event listener to Delete button at the end
        deleteButtonElement.addEventListener('click', () => {
            expensesListElement.innerHTML = '';
        });
        
    });
    
    // 6. create and add to preview list
    function createArticleElement(expense, amount, date) {
        
        
        return ;
    }  
}


// 10.1 extract data from preview
            // const pElementNodeList = liExpenseElement.querySelectorAll('article p');
            // const pElements = Array.from(pElementNodeList);
            //                             // example 'Type: Food'
            // const expenseType = pElements[0].textContent.substring(6); // we get the info after 6th index => Food
            //                             // example 'Amount: 50$'
            // const amount = pElements[1].textContent.substring(8, pElements[1].textContent.length - 1); // the info after the 8th element, until the 'last one' - 1 (to exclude the $ sign)
            //                             // example 'Date: 2023-12-01'
            // const date = pElements[2].textContent.substring(6); // info after the 6th char => we skip 'Date: ' and get only the date '2023-12-01'
