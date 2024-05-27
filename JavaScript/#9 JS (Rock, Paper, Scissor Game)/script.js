const gameForm = document.querySelector('.players-form');
const gameResult = document.querySelector('.winner');

const variante = ['piatra', 'hartie', 'foarfeca'];
const gameWinner = (e) => {
  e.preventDefault();
  const gameData = new FormData(gameForm);

  let playerOne = gameData.get('player-one');
  let playerTwo = gameData.get('player-two');

  if (!variante.includes(playerOne) || !variante.includes(playerTwo)) {
    alert(`Variantele jocului sunt: piatra, hartie, foarfeca.`);
    return;
  }

  // ============= check trueness ==============

  if (playerOne === playerTwo) {
    gameResult.innerText = `Tie`;
  }

  if (playerOne === 'foarfeca') {
    if (playerTwo === 'hartie') {
      gameResult.innerText = `The winner is: Player 1`;
    }
    if (playerTwo === 'piatra') {
      gameResult.innerText = `The winner is: Player 2`;
    }
  } else if (playerOne === 'piatra') {
    if (playerTwo === 'hartie') {
      gameResult.innerText = `The winner is: Player 2`;
    }
    if (playerTwo === 'foarfeca') {
      gameResult.innerText = `The winner is: Player 1`;
    }
  } else if (playerOne === 'hartie') {
    if (playerTwo === 'foarfeca') {
      gameResult.innerText = `The winner is: Player 2`;
    }
    if (playerTwo === 'piatra') {
      gameResult.innerText = `The winner is: Player 1`;
    }
  }
};

gameForm.addEventListener('submit', gameWinner);
