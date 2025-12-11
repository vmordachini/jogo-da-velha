import { TicTacToe } from './TicTacToe.js';

const game = new TicTacToe();

const squares = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');

function updateScreen() {
    squares.forEach((square, index) => {
        const value = game.board[index];
        square.innerHTML = value ? value : '';
        
        // Remove classes antigas e adiciona a base 'cell'
        square.className = 'cell'; 
        
        // Adiciona classe específica para estilizar X ou O se necessário (ex: cores diferentes)
        if (value) square.classList.add(value);
    });

    if (game.winner) {
        // Agora a verificação 'draw' vai funcionar porque alteramos na classe
        if (game.winner === 'draw') {
            statusText.innerText = 'Empate!';
            statusText.style.color = '#fff'; // Cor neutra para empate
        } else {
            statusText.innerText = `Vencedor: ${game.winner}!`;
            statusText.style.color = '#4caf50'; // Verde para vitória
        }
    } else {
        statusText.innerText = `Vez do Jogador: ${game.currentPlayer}`;
        statusText.style.color = '#fff';
    }
}

squares.forEach((square) => {
    square.addEventListener('click', () => {
        // Garante que o índice é um número inteiro
        const index = parseInt(square.getAttribute('data-index'));
        
        if (game.makeMove(index)) {
            updateScreen();
        }
    });
});

restartBtn.addEventListener('click', () => {
    game.reset();
    updateScreen();
});

// Inicializa a tela
updateScreen();