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
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `MOVES LEFT ${10 - moves}`;

                const choiceNUmber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[choiceNUmber];

                //function to check who wins
                winner(this.innerText, computerChoice);


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
    const winner = (playerChoice, computerChoice) =>{
        const results = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.playerCount');
        const computerScoreBoard = document.querySelector('.computerCount');
        
        if(playerChoice.toLowerCase() === computerChoice){
            results.textContent = "tie";
         }
         if(
            (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors")||
            (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper")||
            (playerChoice.toLowerCase() === "paper" && computerChoice === "rock")
            )
            {
                results.textContent = 'Player won against computer';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        if(
            (computerChoice === "rock" && playerChoice.toLowerCase()==="scissors")||
            (computerChoice === "scissors" && playerChoice.toLowerCase()==="paper")||
            (computerChoice === "paper" && playerChoice.toLowerCase() === "rock") 
            )
            {
                results.textContent = 'Computer won against player';
                computerScore++;
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

        chooseMove.innerText ='Game over!!';
        movesLeft.style.display = 'none';

        if (playerScore> computerScore){
            result.innerText= 'You won the game!!';
            result.style.fontSize = '2rem';
            result.style.color = 'green';
        }
        else if (computerScore > playerScore){
            result.innerText ='You lost the game!!';
            result.style.fontSize ='2rem';
            result.style.color = 'red';
        }else{
            result.innerText ='A tie between you and the computer';
            result.style.fontSize = '2rem';
            result.style.color = 'Purple';
        }

        reloadButton.textContent = 'Restart';
        reloadButton.style.display = 'flex';
        reloadButton.addEventListener('click', ()=>{
            window.location.reload();
        })
    }

    //calling the playRound function inside the game function
    playGame();
};

game();



