import { getInputDirection } from "./input.js";
import { draw as drawFood, update as updateFood, getFoodLocation } from './food.js';
export const SNAKE_SPEED = 5;
let snakeBody = [
    {x: 10, y: 10, isHead: true},
];
let gameLost = false;

export function update() {
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {...snakeBody[i], isHead: false}
    }

    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;

    const foodLocation = getFoodLocation();
    if(snakeBody[0].x === foodLocation.x && snakeBody[0].y === foodLocation.y) {
        const i = snakeBody.length - 1;
        const newSnakeElementX = snakeBody[i].x;
        const newSnakeElementY = snakeBody[i].y;

        snakeBody = [
            ...snakeBody,
            {x: newSnakeElementX, y: newSnakeElementY}
        ];
        updateFood();
    }

    snakeBody.forEach(segment => {
        if(segment.isHead === false) {
            if(segment.x === snakeBody[0].x && segment.y === snakeBody[0].y) {
                gameLost = true;
            }
        }
    });

    const snakeHeadLocationX = snakeBody[0].x;
    const snakeHeadLocationY = snakeBody[0].y;

    if(snakeHeadLocationX < 0 || snakeHeadLocationX > 21 || snakeHeadLocationY < 0 || snakeHeadLocationY > 21) {
        gameLost = true;
    }
}

export function draw(gameBoard) {
    if(gameLost === false) {
        snakeBody.forEach(segment => {
            const snakeElement = document.createElement("div");
            snakeElement.style.gridRowStart = segment.x;
            snakeElement.style.gridColumnStart = segment.y;
            snakeElement.classList.add("snake");
            gameBoard.appendChild(snakeElement);
        });
        drawFood(gameBoard);
    } else {
        const gameOver = document.querySelector(".game-over");
        gameOver.classList.add("active");
        gameOver.style.display = 'initial';
        gameBoard.style.display = 'none';
    }
}