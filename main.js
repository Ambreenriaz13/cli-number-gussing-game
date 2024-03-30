#! usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to Coad with Ambreen - CLI Number Gussing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Enter your guess number (Number Limit from 1 to 5):",
    },
]);
if (answer.userGussedNumber === randomNumber) {
    console.log(" Congratulation ! you guess a correct number");
}
else {
    console.log("sorry, you guess a wrong number");
}
