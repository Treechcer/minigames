var score = [0,0]

function aiPlayer(){
    return numToSelector(Math.floor(Math.random() * 3));
}

function numToSelector(num){
    var selector = ["paper", "rock", "scissors"];
    return selector[num];
}

function gameLoop(playerMove){
    let aiMove = aiPlayer()
    let win;
    if (aiMove == playerMove){
        win = "draw";
    }
    else if(playerMove == "rock" && aiMove == "scissors"){
        win = "player";
        score[0]++;
    }
    else if(playerMove == "scissors" && aiMove == "paper"){
        win = "player";
        score[0]++;
    }
    else if (playerMove == "paper" && aiMove == "rock"){
        win = "player";
        score[0]++;
    }
    else{
        win = "ai";
        score[1]++;
    }

    document.getElementById("t").textContent = win + " won";
    document.getElementById("score").textContent = score[0] + ":" + score[1];
}