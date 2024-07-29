#! /usr/bin/env node
import inquirer from "inquirer";
//Printing a Wellcome Message
console.log("\n\tWellcome To\'CodeWithPrena\' - CLI Simple Calculator\n");
// Asking questions from user through inquirer
let answer = await inquirer.prompt([
    { message: "Enter First Number",
        type: "number",
        name: "firstNumber" },
    { message: "Enter Second Number",
        type: "number",
        name: "secondNumber" },
    {
        message: "Select one of the Operators to perform Operation",
        type: "list",
        name: "Operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
    },
]);
// Conditional statements If-Else
if (answer.Operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.Operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.Operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.Operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.Operators === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("Please Select Valid Operator");
}
