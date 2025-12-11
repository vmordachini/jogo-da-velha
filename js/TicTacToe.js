export class TicTacToe {
    constructor() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
        
        // Melhoria: Definir as combinações uma vez só para não recriar a variável a cada jogada
        this.winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
            [0, 4, 8], [2, 4, 6]             // diagonais
        ];
    }

    makeMove(index) {
        // Impede jogada se a célula estiver ocupada ou se já houver vencedor
        if (this.board[index] !== null || this.winner !== null) return false;
        
        this.board[index] = this.currentPlayer;
        this.checkWinCondition();
        
        // Só troca de jogador se o jogo não tiver acabado
        if (!this.winner) this.switchPlayer();
        
        return true;
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
    
    checkWinCondition() {
        for (let combo of this.winningCombos) {
            const [a, b, c] = combo;
            // Verifica se as 3 posições são iguais e não são nulas
            if (this.board[a] && 
                this.board[a] === this.board[b] && 
                this.board[a] === this.board[c]) {
                this.winner = this.board[a];
                return;
            }
        }
        
        // Verifica empate se não houver vencedor e não houver espaços nulos
        if (!this.board.includes(null)) {
            this.winner = 'draw'; // CORREÇÃO: 'draw' em minúsculo para bater com o main.js
        }
    }

    reset() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
    }   
}
