import {SNAKE_SPEED, draw as drawSnake, update as updateSnake} from './snake.js';
const gameBoard = document.querySelector("#game-board");
let lastRender = 0;
let gameStarted = false;

const btnPlay = document.querySelector("#play-button");
btnPlay.addEventListener("click", function() {
    gameStarted = true;
    window.requestAnimationFrame(main);
});

function main(currentTime) {
    if(gameStarted === true) {
        window.requestAnimationFrame(main);
        const secondsSinceLastRender = (currentTime - lastRender) / 1000;
        if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
        console.log('Render');
        lastRender = currentTime;
    
        update();
        draw();
    }
}

function update() {
    updateSnake();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
}