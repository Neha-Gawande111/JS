function calculate() {
    const operation = document.getElementById("operation").value;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = 0;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                document.getElementById("result").textContent = "Cannot divide by zero.";
                return;
            }
            break;
        default:
            document.getElementById("result").textContent = "Invalid operation.";
            return;
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}