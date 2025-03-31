var score = [0,0] // inialises score, [0] is player, [1] is AI

function aiPlayer(){ //this function return number from 0 to 2, for index of array
    return numToSelector(Math.floor(Math.random() * 3));
}

function numToSelector(num){ //this functions return what AI selected based on random index
    var selector = ["paper", "rock", "scissors"]; //array that has all possibilities in
    return selector[num]; //retrun the thing on random index
}

function emojify(move){ //returns emoji from input
    var obj = {
        rock: "🪨",
        paper: "📄",
        scissors: "✂️", 
    }
    return obj[move] //return based on named index (rock, paper or scissors)
}

function gameLoop(playerMove){ //functions for the whole minigame
    let aiMove = aiPlayer() //generates AI move
    let win; //makes "win" undefined, so we don't have to make it in every if statement

    /*
    based on basic rock, paper and scissors ruleset makes the outcome of who wins, if anyone
    and adds score to whoewer wins
    */ 

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

    //these lines under draw all the needed things user needs might want to see

    document.getElementById("t").textContent = win + " won";
    document.getElementById("score").textContent = score[0] + ":" + score[1];
    document.getElementById("p").textContent = emojify(playerMove);
    document.getElementById("a").textContent = emojify(aiMove)
}