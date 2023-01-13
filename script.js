function getComputerChoice(){
    let result = Math.random();
    if (result <= 0.34 && result >=0){
        alert('Rock');
    }else if (result <= 0.67 && result >=0.34){
        alert('Scissors');
    }else{
        result <=1 && result >=0.67
        alert('Paper');
    }
}

function playRound (playAns, compAns){
    if (playAns.toLowerCase() === 'rock'){
        if (compAns === 'Paper'){
            computerScore++;
            return lose;
        }else if (compAns ==='Rock'){
            return tie;
        }else{
            playerScore++;
            return win;
        }
    }if (playAns.toLowerCase() === 'paper'){
        if (compAns === 'Paper'){
            return tie;
        }else if (compAns === 'Rock'){
            playerScore++;
            return win;
        }else{
            computerScore++;
            return lose;
        }
    } if (playAns.toLowerCase() === 'scissors'){
        if (compAns ==='Scissors'){
            return tie;
        }else  if (compAns === 'Paper'){
            playerScore++;
            return win;
        }else{
            computerScore++;
            return lose;
        }
    }
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);
let win = 'You win';
let lose = 'You lose,computer wins';
let tie = 'It is a tie';

function game(){
    for (let i = 0; i< 5; i++){
        let playAns = prompt(`What's your choice?`);
        const compAns = getComputerChoice();
        console.log(playRound(playAns, compAns));
        console.log("your score =" +playerScore)
        console.log("computer score = " +computerScore);
    }
}
console.log(game());

