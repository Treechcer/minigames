function rollTheDice(){
    return Math.ceil(Math.random() * 6)
}

function gameLoop(){
    document.getElementById("text").textContent = rollTheDice()
}