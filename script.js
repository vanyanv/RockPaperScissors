// the players selection using let
let playerSelection = "rock";



//computers selection using a random # to generate rock, paper, scissors
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = ""

    // using a if/else to pick rock, paper,scissors, based of randomNumber

    if (randomNumber === 0){
        computerChoice = "Rock"
    }else if (randomNumber === 1) {
        computerChoice = "Paper"
    }else {
        computerChoice = "Scissor"
    };
    
    return computerChoice;
}

// function that plays one round of rock paper scissors
function oneRound(x,y) {
    // x = playerSelection
    // y = computerSelection
    //if else to see who wins the round

    x = x.toLowerCase();
    y = y.toLowerCase();
    console.log(x);
    console.log(y);
    //rock
    if(x ===  "rock" && y === "rock"){
        return "Its a Tie";
    }else if (x === "rock" && y === "paper"){
        return "You Lose";
    }else if (x === "rock" && y === "scissor"){
        return "You Win";
    };

    //paper
    if(x ===  "paper" && y === "paper"){
        return "Its a Tie";
    }else if (x === "paper" && y === "rock"){
        return "You Win";
    }else if (x === "paper" && y === "scissor"){
        return "You Lose"
    };

    // scissor
    if(x ===  "scissor" && y === "scissor"){
        return "Its a Tie";
    }else if (x === "scissor" && y === "paper"){
        return "You Win";
    }else if (x === "scissor" && y === "rock"){
        return "You Lose"
    };
}