const game = ()=>{
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = ()=>{
        const rockBtn = document.querySelector('#rock');
         const paperBtn = document.querySelector('#paper');
         const scissorsBtn = document.querySelector('#scissors');
         const playerOptions = [rockBtn, paperBtn, scissorsBtn];
         const computerOptions = ['rock', 'paper', 'scissors']

         //Function to start playing
         playerOptions.forEach(option =>{
            option.addEventListener('click', function(){
                const movesLeft = document.querySelector('.moves-left');
                moves++;
                movesLeft.innerHTML = `MOVES LEFT ${10 - moves}`;

                const choiceNUmber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[choiceNUmber];

                //function to check who wins
                winner(this.innerHTML, computerChoice);

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
    if(playerChoice.toLowerCase() === computerChoice){
        roundWinner = "tie";
    }
    if(
        (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors")||
        (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper")||
        (playerChoice.toLowerCase() === "paper" && computerChoice === "rock")
        ){
            pScore.dataset.score = parseInt(pScore.dataset.score) +1;
            pScore.textContent = "PLAYER: " + pScore.dataset.score;
            roundWinner = "player";
        }
    if(
        (computerChoice === "rock" && playerChoice.toLowerCase()==="scissors")||
        (computerChoice === "scissors" && playerChoice.toLowerCase()==="paper")||
        (computerChoice === "paper" && playerChoice.toLowerCase() === "rock") 
        ){
            cScore.dataset.score = parseInt(cScore.dataset.score) +1;
            cScore.textContent = "COMPUTER: " + cScore.dataset.score;
            roundWinner = "computer";
        }
        console.log("computer: " + computerChoice  +"  player: " + playerChoice + ", winner: " + roundWinner + "." );
        winnerDefined(roundWinner, playerChoice, computerChoice);
    }
    //computer selection methodlogy
    function getRandomChoice(){
        let computerSign = document.getElementById("computerSign");
        let randomChoice = Math.floor(Math.random() * 3);
        var randomChoiceText;

        switch(randomChoice){
            case 0:
                computerSign.innerHTML = '<img src="https://www.freepnglogos.com/images/blank.gif" alt="Rock"></img>';
                randomChoiceText ='rock';
                break;
            case 1:
                computerSign.innerHTML = '<img src ="https://png.pngtree.com/png-vector/20220624/ourmid/pngtree-torn-notebook-paper-coiled-paper-png-image_5316955.png" alt="Paper"></img>'
                randomChoiceText ='paper';
                break;
            case 2:
                computerSign.innerHTML = '<img src="https://freepngimg.com/thumb/scissor/14-2-scissor-picture-thumb.png" alt ="Scissors"></img>';
                randomChoiceText='scissors';
                break;
        }
        return randomChoiceText;
    }

    const winnerDefined = function(winner, playerChoice, computerChoice){
        var txtMessage = '';
        if (winner === 'player'){
            scoreMessage.textContent = 'You win against the computer';
            return;
        }
        if(winner === 'computer'){
            scoreMessage.textContent = 'Computer beats player';
            return;
        }
        scoreMessage.textContent = 'Computer ties with player'

    }



    






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

