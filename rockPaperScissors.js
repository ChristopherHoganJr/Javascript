const getUserChoice = userInput => {
  // lowercase all letters to work with our code
  userInput = userInput.toLowerCase();
  // Check to make sure the user choice a correct choice
  // Add cheat code: bomb
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
  } else {
    console.log('You did not choose rock, paper, or scissors.');
  }
};

const getComputerChoice = () => {
  // Generator random number between 0-2
  const randomNumber = Math.floor(Math.random() * 3);
  // Translate the computers choice
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  // Cheat Code
  if (userChoice === 'bomb') {
    return '#Cheat Activated !!!You win!!!'
  }
  // If user choice and computer choice are the same
  if (userChoice === computerChoice) {
    return 'This game is a tie.';
  }
  // Outcomes if user chose rock
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'You lose.';
    } else {
      return 'You Win!';
    }
  }
  // Outcomes if user chose scissors
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'You lose.';
    } else {
      return 'You Win!';
    }
  }
  // Outcomes if user chose paper
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'You lose.';
    } else {
      return 'You Win!';
    }
  }
};

// Actual game function
const playGame = () => {
  // Put the user choice here
  const userChoice = getUserChoice('bomb');
  // Adds the computer choice to the game
  const computerChoice = getComputerChoice();
  // States what each part chose
  console.log(`You picked: ${userChoice}`);
  console.log(`The computer picked: ${computerChoice}`);
  // Determine the winner
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()
