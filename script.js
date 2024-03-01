"use strict";

const getComputerChoice = function () {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    return randomNum;
};

let playerScore = 0;
let cpuScore = 0;

const playRPS = function () {
    let playerChoice = prompt("Rock, paper or scissors?").toLowerCase();
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

    console.log(`The score is: You ${playerScore}, CPU ${cpuScore}`);
    console.log(counter);
};

let playGame = function () {
    while (playerScore < 3 && cpuScore < 3) {
        playRPS();
    }
    playerScore > cpuScore
        ? console.log("You win:)")
        : console.log("You lose:/");
};
playGame();
