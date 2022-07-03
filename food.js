let foodLocation = {x: 5, y: 5}

export function update() {
    const newFoodLocationX = Math.floor(Math.random() * 21 - 0);
    const newFoodLocationY = Math.floor(Math.random() * 21 - 0);

    foodLocation = {x: newFoodLocationX, y: newFoodLocationY}
}

export function draw(gameBoard) {
    const newFood = document.createElement("div");
    newFood.style.gridRowStart = foodLocation.x;
    newFood.style.gridColumnStart = foodLocation.y;
    newFood.classList.add("food");
    gameBoard.appendChild(newFood);
}

export function getFoodLocation() {
    return foodLocation;
}