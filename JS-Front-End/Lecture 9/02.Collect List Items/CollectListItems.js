function extractText() {
    const ulElement = document.getElementById('items');
    const resultElement = document.getElementById('result');

    // const textResult = ulElement.textContent
    // .split('\n')
    // .map(row => row.trim())
    // .join('\n')
    // .trim();

    const textResult = ulElement.innerText;

    resultElement.textContent = textResult;
}
