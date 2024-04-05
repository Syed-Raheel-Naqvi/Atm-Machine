#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 20000;
let myPin = 1234;
let pinAwnser = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellowBright("Enter you pin number"),
        type: "number",
    },
]);
if (pinAwnser.pin === myPin) {
    console.log(chalk.greenBright("\nCorrect pin code !!!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: " enter your name",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.redBright("Insufficient Balance"));
        }
        else if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw Successfully`);
        }
        console.log(`Your Remaining Balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your Balance is : ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let cashAmount = await inquirer.prompt([
            {
                name: "cash",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 15000],
            },
        ]);
        myBalance -= cashAmount.cash;
        console.log(`${cashAmount.cash} withdraw Successfully`);
        console.log(`Your Remaining Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.redBright("Incorrect Pin Number"));
}
