function playRound(playerSelection, computerSelection) {
      // Convert both selections to lowercase for case-insensitive comparison
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();
  // Check for a tie
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  // Check for player wins
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return `You Win! ${playerChoice} beats ${computerChoice}`;
  }

  // If none of the above conditions are met, player loses
  return `You Lose! ${computerChoice} beats ${playerChoice}`;
}

function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    // Assign 'Rock', 'Paper', or 'Scissors' based on the random number
    if (randomNumber === 0) {
      return 'Rock';
    } else if (randomNumber === 1) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
  }

for (let i = 0; i < 5; i++) {
    const playerSelection = "rock";
    const computerSelection = getComputerChoice(); // Assuming you have a function to get the computer's selection
    console.log(playRound(playerSelection, computerSelection));
  }
  

  