#! /usr/bin/env node

import inquirer from 'inquirer';
let pin: number = 5555;

const myPin = await inquirer.prompt([
    {
        type: "password",
        name: "code",
        message: "Enter your calculator password?",
    }
])

let playAgain = 'true';
while (playAgain) {
    if (myPin.code != pin) {
        console.log("Sorry you can enter wrong password");
    } else {
        const calculation = await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                message: "What operation you want to perfome?",
                choices: ["Add", "Subtract", "Multipliy", "Division"]
            }
        ])
        const myCalc = await inquirer.prompt([
            {
                type: "number",
                name: "num1",
                message: "Enter First Number?"
            },
            {
                type: "number",
                name: "num2",
                message: "Enter Second Number?"
            }
        ])

        if (calculation.operation === "Add") {
            console.log(myCalc.num1 + myCalc.num2)
        } else if (calculation.operation === "Subtract") {
            console.log(myCalc.num1 - myCalc.num2)
        } else if (calculation.operation === "Multipliy") {
            console.log(myCalc.num1 * myCalc.num2)
        } else {
            console.log(myCalc.num1 / myCalc.num2)
        }
    }

    const tryAgain = await inquirer.prompt([
        {
            type: "confirm",
            name: "try",
            message: "Do you want to try other operation?",
        }
    ])

    if (tryAgain.try === false) {
        break;

    }
}