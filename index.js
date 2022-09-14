function playRound(e)
{
    const choices = document.querySelectorAll("button");
    const result = document.querySelector(".results");
    const playerSelection = this.value;
    const computerSelection = getComputerChoice();
    const playerScore = document.querySelector(".playerScore");
    const computerScore = document.querySelector(".computerScore");
    let playerScoreNum = parseInt(playerScore.innerHTML);
    let computerScoreNum = parseInt(computerScore.innerHTML);

    //  Determine the winner, display the results of that round, and increment overall wins for winning player

    if (playerSelection === "rock")
    {
        if (computerSelection === "rock")
        {
            result.innerHTML = "You tied!";
        }
        else if (computerSelection === "paper")
        {
            result.innerHTML = "You lose! Paper beats rock.";
            computerScoreNum = ++computerScoreNum;
            computerScore.innerHTML = computerScoreNum;
        }
        else
        {
            result.innerHTML= "You win! Rock beats scissors.";
            playerScoreNum = ++playerScoreNum;
            playerScore.innerHTML = playerScoreNum;
        }
    }
    else if (playerSelection === "paper")
    {
        if (computerSelection === "paper")
        {
            result.innerHTML = "You tied!";
        }
        else if (computerSelection === "scissors")
        {
            result.innerHTML = "You lose! Scissors beats paper.";
            computerScoreNum = ++computerScoreNum;
            computerScore.innerHTML = computerScoreNum;
        }
        else
        {
            result.innerHTML = "You win! Paper beats rock.";
            playerScoreNum = ++playerScoreNum;
            playerScore.innerHTML = playerScoreNum;
        }
    }
    else if (playerSelection === "scissors")
    {
        if (computerSelection === "scissors")
        {
            result.innerHTML = "You tied!";
        }
        else if (computerSelection === "rock")
        {
            result.innerHTML = "You lose! Rock beats scissors";
            computerScoreNum = ++computerScoreNum;
            computerScore.innerHTML = computerScoreNum;
        }
        else
        {
            result.innerHTML = "You win! Scissors beats paper!";
            playerScoreNum = ++playerScoreNum;
            playerScore.innerHTML = playerScoreNum;
        }
    }
    else
    {
        result.innerHTML="Invalid selection!";
    }
    
    //  If either player reaches 5 wins, stop listening for button clicks and show the winner

    if (playerScoreNum== 5 || computerScoreNum== 5)
    {
        endGame(playerScore, computerScore);
    }
    return;
}

function endGame(playerScore, computerScore)
{
    const choices = document.querySelectorAll("button");
    const results = document.querySelector(".results");

    choices.forEach(choice => choice.removeEventListener('click', playRound));
        
    if (playerScore.innerHTML > computerScore.innerHTML)
    {
        results.innerHTML = "You are the first to reach 5! You win the game!!!!";
    }
    else
    {
        results.innerHTML = "Computer is the first to reach 5! You lose the game!!!";
    }
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

    return computerSelection;
}

// This function is no longer needed for updated version of RPS.
//
// function getPlayerChoice(){

//     let playerChoice = prompt("Choose rock, paper, or scissors!");
//     playerChoice = playerChoice.toLowerCase();
    
//     while (playerChoice != "rock"
//             && playerChoice != "paper"
//             && playerChoice != "scissors")
//     {
//         playerChoice = prompt("Invalid selection, choose rock, paper, or scissors!");
//         playerChoice = playerChoice.toLowerCase();
//     }

//     console.log("Player selection is:", playerChoice);

//     return playerChoice;

// }
//
//  This function is no longer needed for updated version of RPS.
//
// function game(){

//     let roundResult = "";
//     let wins = 0;
//     let losses = 0;
//     let ties = 0;

//     for (let i = 0; i < 5; i++)
//     {
//         roundResult = playRound(getPlayerChoice(), getComputerChoice());
        
//         if (roundResult === "Win")
//         {
//             wins++
//         }
//         else if (roundResult === "Loss")
//         {
//             losses++;
//         }
//         else if (roundResult === "Tie")
//         {
//             ties++;
//         }
//     }

//     if (wins > losses)
//     {
//         console.log("You won with a score of " + wins + " wins, " + losses + " losses, and " + ties + " ties");
//     }
//     else if (wins < losses)
//     {
//         console.log("You lost with a score of " + wins + " wins, " + losses + " losses, and " + ties + " ties");
//     }
//     else
//     {
//         console.log("You tied with a score of " + wins + " wins, " + losses + " losses, and " + ties + " ties");
//     }
// }

const choices = document.querySelectorAll("button");

choices.forEach(choice => choice.addEventListener('click', playRound));



