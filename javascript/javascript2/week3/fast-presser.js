//Key presser
const inputTime = document.getElementById('time-input');
const displayTimeMessage = document.getElementById('enter-time-message')
const startButton = document.getElementById('start-game');
const resetButton = document.getElementById('reset');
const gameOverText = document.getElementById('game-over-text');
const sCanvas = document.getElementById('s-canvas');
const lCanvas = document.getElementById('l-canvas');
const sSideCount = document.getElementById('s-count');
const lSideCount = document.getElementById('l-count');
const displayWinnerS = document.getElementById('display-winner-s');
const displayWinnerL = document.getElementById('display-winner-l');
const drawGame = document.getElementById('draw-game');
let userInputTime;
let sCount = 0;
let lCount = 0;
startButton.addEventListener('click', displayKeyPresser);
resetButton.addEventListener('click', restart);

function displayKeyPresser() {
    userInputTime = inputTime.value;
    if (userInputTime === '') {
        displayTimeMessage.innerHTML = 'Please enter time'
    }
    else {
        setTimeout(() => {
            document.removeEventListener('keydown', keyPressFunction);
            gameOverText.innerHTML = 'Time is up';
            getWinner();
        }, userInputTime * 1000);
        document.addEventListener('keydown', keyPressFunction);

        function keyPressFunction(event) {
            if (event.key === 's') {
                sCount++;
                sSideCount.innerHTML = sCount;
            }
            else if (event.key === 'l') {
                lCount++;
                lSideCount.innerHTML = lCount;
            }
        }
    }
}

function getWinner() {
    if (sCount > lCount) {
        displayWinnerS.innerHTML = 'You won';
    }
    else if (sCount < lCount) {
        displayWinnerL.innerHTML = 'You won';
    }
    else if (sCount === lCount) {
        drawGame.innerHTML = 'It was draw';
    }
}

function restart() {
    lCount = 0;
    sCount = 0;
    inputTime.value = '';
    gameOverText.innerHTML = ''
    sSideCount.innerHTML = '';
    lSideCount.innerHTML = '';
    displayWinnerS.innerHTML = '';
    displayWinnerL.innerHTML = '';
    drawGame.innerHTML = '';
}
