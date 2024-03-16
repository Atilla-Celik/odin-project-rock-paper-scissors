"use strict";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = document.querySelectorAll(".selection");
const results = document.querySelector(".results");

const getComputerChoice = function () {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    return randomNum;
};

buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
        playRPS(btn.textContent.toLowerCase());
        console.log(btn.textContent.toLowerCase());
    })
);

let playerScore = 0;
let cpuScore = 0;

const playRPS = function (playerChoice) {
    let computerChoice = getComputerChoice();

    if (playerChoice === "rock") {
        if (computerChoice === 1) {
            console.log("Rock. It's a draw");
        } else if (computerChoice === 2) {
            console.log("Paper. You lose.");
            cpuScore++;
        } else {
            console.log("Scissors. You win.");
            playerScore++;
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === 1) {
            console.log("Rock. You win.");
            playerScore++;
        } else if (computerChoice === 2) {
            console.log("Paper. It's a draw.");
        } else {
            console.log("Scissors. You lose.");
            cpuScore++;
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === 1) {
            console.log("Rock. You lose.");
            cpuScore++;
        } else if (computerChoice === 2) {
            console.log("Paper. You win.");
            playerScore++;
        } else {
            console.log("Scissors. It's a draw.");
        }
    } else {
        console.log("Invalid answer");
    }

    results.innerText = `The score is: You ${playerScore}, CPU ${cpuScore}`;

    if (playerScore === 5) {
        results.innerText += "\nYou won!";
    } else if (cpuScore === 5) {
        results.innerText += "\nYou lost:/";
    }
};
// playGame();
