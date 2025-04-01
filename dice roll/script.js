function rollTheDice(){
    return Math.ceil(Math.random() * 6)
}

function gameLoop(){
    var num = rollTheDice()
    num = 6
    if (num == 1){
        for (let i = 1; i < 10; i++){
            if (i == 5){
                continue
            }
            document.getElementById(i).style.visibility = "hidden"
        }
    }
    if (num == 2){
        for (let i = 1; i < 10; i++){
            if (i == 1 || i == 9){
                continue
            }
            document.getElementById(i).style.visibility = "hidden"
        }
    }
    if (num == 3){
        for (let i = 1; i < 10; i++){
            if (i == 3 || i == 5 || i == 7){
                continue
            }
            document.getElementById(i).style.visibility = "hidden"
        }
    }
    if (num == 4){
        for (let i = 1; i < 10; i++){
            if (i == 1 || i == 3 || i == 7 ||i == 9){
                continue
            }
            document.getElementById(i).style.visibility = "hidden"
        }
    }
    if (num == 5){
        for (let i = 1; i < 10; i++){
            if (i == 1 || i == 3 || i == 7 ||i == 9 || i == 5){
                continue
            }
            document.getElementById(i).style.visibility = "hidden"
        }
    }
    if (num == 6){
        for (let i = 1; i < 10; i++){
            if (i == 1 || i == 3 || i == 7 ||i == 9 || i == 4 || i == 6){
                continue
            }
            document.getElementById(i).style.visibility = "hidden"
        }
    }
}