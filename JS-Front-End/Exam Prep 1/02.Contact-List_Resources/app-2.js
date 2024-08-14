window.addEventListener("load", solve);

function solve() {
	// get inputs
	const nameInput = document.getElementById("name");
	const phoneInput = document.getElementById("phone");
	const categoryInput = document.getElementById("category");
	const contactList = document.getElementById("contact-list");

	// get add button element
	const addButtonElement = document.getElementById("add-btn");

	// get ul list element
	const checklist = document.getElementById("check-list");

	// Attach add event
	addButtonElement.addEventListener("click", () => {
		// get input data
		const name = nameInput.value;
		const phoneNumber = phoneInput.value;
		const category = categoryInput.value;

		// create checklist element
		const liElement = createCheckListElement(name, phoneNumber, category);

		// add elements to checklist
		checklist.appendChild(liElement);

		// clear the inputs
		clearInputs();
	});

	function clearInputs() {
		nameInput.value = "";
		phoneInput.value = "";
		categoryInput.value = "";
	}

	function createCheckListElement(name, phoneNumber, category) {
		const pNameElement = document.createElement("p");
		pNameElement.textContent = `name:${name}`;

		const pPhoneElement = document.createElement("p");
		pPhoneElement.textContent = `phone:${phoneNumber}`;

		const pCategoryElement = document.createElement("p");
		pCategoryElement.textContent = `category:${category}`;

		const articleElement = document.createElement("article");
		articleElement.appendChild(pNameElement);
		articleElement.appendChild(pPhoneElement);
		articleElement.appendChild(pCategoryElement);

		const editButton = document.createElement("button");
		editButton.classList.add("edit-btn");

		const saveButton = document.createElement("button");
		saveButton.classList.add("save-btn");

		const divButtons = document.createElement("div");
		divButtons.classList.add("buttons");
		divButtons.appendChild(editButton);
		divButtons.appendChild(saveButton);

		const liElement = document.createElement("li");
		liElement.appendChild(articleElement);
		liElement.appendChild(divButtons);

		editButton.addEventListener("click", () => {
			// get data of selected number (of there are 2 numbers)
			// set inputs
			nameInput.value = name;
			phoneInput.value = phoneNumber;
			categoryInput.value = category;

			// remove checklist element
			liElement.remove();
		});

		saveButton.addEventListener("click", () => {
			// remove edit and save buttons
			divButtons.remove();

			//create delete button
			const deleteButton = document.createElement("button");
			deleteButton.classList.add("del-btn");

			deleteButton.addEventListener("click", deleteContact);

			// add delete buttons
			liElement.appendChild(deleteButton);

			// move to contact list
			contactList.appendChild(liElement);
		});

		return liElement;
	}
    function deleteContact(e) {
        e.target.parentElement.remove();
    }
}
