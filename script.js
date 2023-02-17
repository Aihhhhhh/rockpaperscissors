const game = ()=>{
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = ()=>{
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ['rock', 'paper', 'scissors'];

         //Function to start playing
        playerOptions.forEach(option =>{
            option.addEventListener('click', function(){
                const movesLeft = document.querySelector('.moves-left');
                moves++;
                movesLeft.innerHTML = `MOVES LEFT ${10 - moves}`;

                const choiceNUmber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[choiceNUmber];

                //function to check who wins


                //function to play when game is over
                if(moves === 10){
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }
    /*    
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const scoreMessage = document.getElementById('scoreMessage');
const pSign = document.getElementById('playerSign');
 */   


//function to decide winner
    function playRound(playerChoice, computerChoice){
        const results = document.querySelector('.result');
        const playerScoreBoard = document.getElementById('playerScore');
        const computerScoreBoard = document.getElementById('computerScore');
        if(playerChoice.toLowerCase() === computerChoice){
            results.textContent = "tie";
    }
    if(
        (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors")||
        (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper")||
        (playerChoice.toLowerCase() === "paper" && computerChoice === "rock")
        ){
            playerScore++;
            results.textContent = 'Player won against computer';
            playerScoreBoard.textContent = playerScore;
        }
    if(
        (computerChoice === "rock" && playerChoice.toLowerCase()==="scissors")||
        (computerChoice === "scissors" && playerChoice.toLowerCase()==="paper")||
        (computerChoice === "paper" && playerChoice.toLowerCase() === "rock") 
        ){
            computerScore++;
            results.textContent = 'Computer won against player';
            computerScoreBoard.textContent = computerScore;
        }
    }

    //Function to decide winner
    const gameOver = (playerOptions, movesLeft) =>{
        const chooseMove = document.querySelector('.moves');
        const result = document.querySelector('.result');
        const reloadButton = document.querySelector('.reload');

        playerOptions.forEach(option =>{
            option.style.display = 'none';
        })

        chooseMove.innerHTML ='Game over!!';
        movesLeft.style.display = 'none';

        if (playerScore > computerScore){
            result.textContent = 'You won the game!!';
            result.style.fontSize = '2rem';
            result.style.color = 'green';
        }
        else if (playerScore < computerScore){
            result.textContent ='You lost the game!!';
            result.style.fontSize ='2rem';
            result.style.color = 'red';
        }
        else{
            result.textContent ='A tie between you and the computer';
            result.style.fontSize = '2rem';
            result.style.color = 'Purple';
        }

        reloadButton.textContent = 'Restart';
        reloadButton.style.display = 'flex';
        reloadButton.addEventListener('click', ()=>{
            window.location.reload();
        })
    }

    //calling the playRound function
    playGame();
}

game();


    



    






/*function getComputerChoice(){
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

const button1 = document.createElement('playerb');
const button2 = document.createElement('compb');
const button3 = document.createElement('scoresb');
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);



button3.addEventListener('click', ()=>{
    console.log(playRound(playAns, compAns));
    console.log("your score =" +playerScore);
    console.log("computer score =" +computerScore);
})

button2.addEventListener('click', ()=>{
    console.log(playRound(playAns , compAns));
    console.log("your score =" +playerScore);
    console.log("computer score =" +computerScore);
});

/*function game(){
    for (let i = 0; i< 5; i++){
        let playAns = prompt(`What's your choice?`);
        const compAns = getComputerChoice();
        console.log(playRound(playAns, compAns));
        console.log("your score =" +playerScore)
        console.log("computer score = " +computerScore);
    }
}
console.log(game());
*/

