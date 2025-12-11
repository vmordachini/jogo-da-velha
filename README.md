# Jogo da Velha (Tic-Tac-Toe)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Uma implementação interativa e moderna do clássico Jogo da Velha, desenvolvida com tecnologias web padrão. O projeto foca na separação de responsabilidades, utilizando Programação Orientada a Objetos (POO) para a lógica do jogo.

---

## 🚀 Funcionalidades

* **Jogabilidade Clássica:** Disputa entre dois jogadores (X e O) em um tabuleiro 3x3.
* **Identificação de Jogadores:** Campos de entrada para personalizar os nomes dos jogadores antes de iniciar a partida.
* **Detecção de Vitória e Empate:** O sistema verifica automaticamente linhas, colunas e diagonais para declarar um vencedor ou identificar um empate ("Velha").
* **Interface Responsiva:** Design limpo e centralizado, com destaque visual para o turno atual e para o vencedor.
* **Reinício Rápido:** Botão para reiniciar o jogo instantaneamente sem recarregar a página.

---

## 🛠️ Tecnologias e Estrutura

O projeto foi organizado para manter o código limpo e manutenível:

* **HTML5 (`index.html`):** Estrutura semântica da página, contendo o tabuleiro e os controles do jogo.
* **CSS3 (`style.css`):** Estilização completa utilizando Flexbox para layout, variáveis CSS para cores e efeitos de *hover* para interatividade.
* **JavaScript (ES6+):**
    * **`js/TicTacToe.js`:** Contém a classe `TicTacToe`, responsável por toda a regra de negócio (estado do tabuleiro, validação de jogadas, troca de turno).
    * **`js/main.js`:** Atua como o controlador, manipulando o DOM, capturando os cliques dos usuários e atualizando a interface com base no estado do objeto `TicTacToe`.

---

## 🏃‍♀️ Como Executar

Não é necessário instalar dependências ou configurar servidores.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/vmordachini/jogo-da-velha.git](https://github.com/vmordachini/jogo-da-velha.git)
    cd jogo-da-velha
    ```

2.  **Abra o jogo:**
    * Basta abrir o arquivo `index.html` diretamente em seu navegador preferido (Chrome, Firefox, Edge, etc.).

---

## 🎨 Design

O projeto utiliza uma paleta de cores moderna e contrastante para garantir boa legibilidade:
* Fundo escuro para destacar o tabuleiro.
* Cores distintas para os jogadores (X e O).
* Feedback visual claro ao passar o mouse sobre as células vazias.
