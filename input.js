let inputDirection = {x: 0, y: 0}

const moveSnake = {
    ArrowUp() {
        inputDirection = {x: -1, y: 0}
    },
    ArrowDown() {
        inputDirection = {x: 1, y: 0}
    },
    ArrowLeft() {
        inputDirection = {x: 0, y: -1}
    },
    ArrowRight() {
        inputDirection = {x: 0, y: 1}
    }
}

document.addEventListener("keydown", function(e) {
    const keyCode = e.key;
    if(!moveSnake[keyCode]) return;
    moveSnake[keyCode]();
});

export function getInputDirection() {
    return inputDirection;
}