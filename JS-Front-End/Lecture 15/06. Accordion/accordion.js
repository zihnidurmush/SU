async function solution() {
    const main = document.getElementById("main");
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const response = await fetch(url);
    const data = await response.json();

    data.forEach((article) => {
        // Create the main accordion container
        const divAccordion = document.createElement("div");
        divAccordion.classList.add("accordion");

        // Create the head div
        const divHead = document.createElement("div");
        divHead.classList.add("head");

        // Create the span for the title
        const spanTitle = document.createElement("span");
        spanTitle.textContent = article.title;

        // Create the button
        const button = document.createElement("button");
        button.classList.add("button");
        button.id = article._id;
        button.textContent = "More";
        button.addEventListener("click", toggle);

        // Append the title and button to the head div
        divHead.appendChild(spanTitle);
        divHead.appendChild(button);

        // Create the extra content container
        const divExtra = document.createElement("div");
        divExtra.classList.add("extra");
        divExtra.style.display = "none";  // Initially hidden

        // Create the paragraph for the content
        const pContent = document.createElement("p");

        // Append the paragraph to the extra content div
        divExtra.appendChild(pContent);

        // Append the head and extra divs to the accordion container
        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);

        // Append the accordion container to the main section
        main.appendChild(divAccordion);
    });

    async function toggle(event) {
        const button = event.target;
        const accordion = button.closest(".accordion");
        const extra = accordion.querySelector(".extra");
        const p = extra.querySelector("p");
        const id = button.id;

        if (extra.style.display === "none") {
            // Fetch content only when expanding
            const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            p.textContent = data.content;

            // Show the extra content
            extra.style.display = "block";
            button.textContent = "Less";
        } else {
            // Hide the extra content
            extra.style.display = "none";
            button.textContent = "More";
        }
    }
}

solution();
