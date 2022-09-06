function playRound(playerSelection, computerSelection){

    let result = ""

    if (playerSelection === "rock")
    {
        if (computerSelection === "rock")
        {
            console.log("Tie!");
            result = "Tie";
        }
        else if (computerSelection === "paper")
        {
            console.log("You lose! Paper beats rock.")
            result = "Loss";
        }
        else
        {
            console.log("You win! Rock beats scissors.")
            result = "Win"
        }
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "paper")
        {
            console.log("Tie!");
            result = "Tie";
        }
        else if (computerSelection === "scissors")
        {
            console.log("You lose! Scissors beats paper.")
            result = "Loss";
        }
        else
        {
            console.log("You win! Paper beats rock.")
            result = "Win"
        }
    }
    else if (playerSelection === "scissors")
    {
        if (computerSelection === "scissors")
        {
            console.log("Tie!");
            result = "Tie";
        }
        else if (computerSelection === "rock")
        {
            console.log("You lose! Rock beats scissors.")
            result = "Loss";
        }
        else
        {
            console.log("You win! Scissors beats paper.")
            result = "Win";
        }
    }

    return result;

}

function getComputerChoice(){

    const randomNum       =  Math.floor(Math.random() * 3);
    let computerSelection =  "";
    
    if (randomNum == 0)
    {
        computerSelection = "rock";
    }
    else if (randomNum == 1)
    {
        computerSelection = "paper";
    }
    else
    {
        computerSelection = "scissors";
    }

    console.log("Computer selection is:", computerSelection);
    
    return computerSelection;
}

function getPlayerChoice(){

    let playerChoice = prompt("Choose rock, paper, or scissors!");
    playerChoice = playerChoice.toLowerCase();
    
    while (playerChoice != "rock"
            && playerChoice != "paper"
            && playerChoice != "scissors")
    {
        playerChoice = prompt("Invalid selection, choose rock, paper, or scissors!");
        playerChoice = playerChoice.toLowerCase();
    }

    console.log("Player selection is:", playerChoice);

    return playerChoice;

}

function game(){

    let roundResult = "";
    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++)
    {
        roundResult = playRound(getPlayerChoice(), getComputerChoice());
        
        if (roundResult === "Win")
        {
            wins++
        }
        else if (roundResult === "Loss")
        {
            losses++;
        }
        else if (roundResult === "Tie")
        {
            ties++;
        }
    }

    if (wins > losses)
    {
        console.log("You won with a score of " + wins + " wins, " + losses + " losses, and " + ties + " ties");
    }
    else if (wins < losses)
    {
        console.log("You lost with a score of " + wins + " wins, " + losses + " losses, and " + ties + " ties");
    }
    else
    {
        console.log("You tied with a score of " + wins + " wins, " + losses + " losses, and " + ties + " ties");
    }
}

game();