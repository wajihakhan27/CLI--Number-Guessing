#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome To Number Guessing Game");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a Number Between 1 to 6:",
    },
    {
        message: "Are you sure to guess the right number",
        type: "list",
        name: "confirmGuess",
        choices: ["Yes", "Maybe"],
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congtratulation!  You Guessed Right Number");
}
else {
    console.log(" Oops! You are Guessed Wrong Number ");
    console.log(" Better luck next time!");
}
;
