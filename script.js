console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice, please try again.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

function playGame() {

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

playGame();