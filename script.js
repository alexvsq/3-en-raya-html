const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const table = document.querySelector('#table')
const turnHtml = document.querySelector('#turn')
const popups = document.querySelector('.popup')
const newGameBtn = document.querySelector('#newGame')

newGameBtn.addEventListener('click', () => {
    squares = Array(9).fill(null)
    turn = 'X'
    popups.classList.toggle('off')
    table.innerHTML = ''
    winner = false
    createTable()
    setTurn()
})

function checkWinner(array) {
    for (let current of WINNER_COMBOS) {
        const [a, b, c] = current;
        if (array[a] != null && array[a] === array[b] && array[a] === array[c]) {
            popups.classList.toggle('off')
            return true;
        }
    }
    return false;
}

function setTurn(){
    turnHtml.textContent = turn
}

let winner = false
let squares = Array(9).fill(null)
let turn = 'X'

setTurn()

function createTable(){
squares.forEach((_, i) => {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('click', () => {
        if(square.textContent == '' && winner == false){
            squares[i] = turn
            square.textContent = turn
            turn = turn == 'X' ? 'O' : 'X'
            turnHtml.textContent = turn
            winner =  checkWinner(squares)
        }
    })
    table.appendChild(square)
    
});
}

createTable()

