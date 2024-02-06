function findPrimeFactors() {
    const numberInput = document.getElementById("number");
    const resultElement = document.getElementById("result");
    const number = parseInt(numberInput.value);

    if (isNaN(number) || number <= 0) {
        resultElement.textContent = "Please enter a valid positive integer.";
        return;
    }

    const factors = [];

    for (let divisor = 2; divisor <= number; divisor++) {
        while (number % divisor === 0) {
            factors.push(divisor);
            number /= divisor;
        }
    }

    resultElement.textContent = (`Prime factors of ${numberInput.value}: ${factors.join(', ')}`);
}