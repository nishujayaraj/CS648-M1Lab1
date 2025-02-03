let firstNumber = parseInt(prompt("First integer:"));
let secondNumber = parseInt(prompt("Second integer:"));
if (firstNumber > secondNumber) {
    document.write("The larger number is: " + firstNumber);
} else if (secondNumber > firstNumber) {
    document.write("The larger number is: " + secondNumber);
} else {
    document.write("Both numbers are equal.");
}