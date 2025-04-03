function rollTheDice(){ //function that generates numbers from 1-6
    return Math.ceil(Math.random() * 6)
}

function gameLoop(){ //main logic of the dice roller
    var num = rollTheDice() //"rolls the dice"

    for (let i = 1; i < 10; i++){ // this makes it possible to roll it more times
        document.getElementById(i).style.visibility = "visible"
    }

    if (num == 1){ //it hides the balls to make the numbers, all of them does this
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