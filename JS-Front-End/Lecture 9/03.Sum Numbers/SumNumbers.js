function calc() {
    // TODO: sum = num1 + num2
    const num1Element = document.getElementById("num1");
    const num2Element = document.getElementById("num2");
    const sumElement = document.getElementById("sum");

    const firstNumber = Number(num1Element.value);
    const secondNumber = Number(num2Element.value);

    sumElement.value = firstNumber + secondNumber;
}
