// program for a simple prompt calculator

// taking the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const num1 = parseFloat(prompt('Enter your first number: '));
const num2 = parseFloat(prompt('Enter your second number: '));

let result;

// using if...else 
if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

// display the result
alert(`The result is: \n${num1} ${operator} ${num2} = ${result}`);