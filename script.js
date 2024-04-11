let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const resetButton=document.querySelector(".reset-button");

const genCompChoice = () =>{
    const options=["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
    console.log("game was draw");
    msg.innerText ="GAME DRAW";
    msg.style.backgroundColor = "#020817";
}

showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        msg.innerText = `You WIN! your ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        msg.innerText = `You LOST! your ${userChoice} lose from computer ${compChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) =>{
    //generate computer choice
    const compChoice = genCompChoice(); 
    
    //main logic 
    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissor
            userWin = compChoice === "paper"? false : true; 
        } else if(userChoice === "paper"){
            //rock,scissor
            userWin = compChoice === "scissor" ? false : true;
        }else {
            //paper,rock
            userWin = compChoice === "rock" ? false :true;
        } 
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);     
    })
})

resetButton.onclick = () => {
    console.log("btn was clicked");
    userScore = 0;
    userScorePara.innerText= userScore;
    compScore= 0;
    compScorePara.innerText =compScore;
    msg.innerText = "pick your move"
    msg.style.backgroundColor = "#031428" ;
}