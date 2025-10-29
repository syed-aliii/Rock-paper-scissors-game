let userscore = 0
let compscore = 0

let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")
let userscoreMsg = document.querySelector("#user-score")
let compscoreMsg = document.querySelector("#comp-score")

const compgenChoice = ()=>{
    const optinons = ["rock", "paper", "scissor"];
    const compchoice = Math.floor(Math.random()* 3);
    return optinons[compchoice];
}

const drawGame = ()=>{
    console.log("game is draw");
    msg.innerText = "Game was Draw play Again"
    msg.style.backgroundColor = "#081b31";

}
    const showWinner = (userWin , userChoice , computerchoices)=>{
    if(userWin){
        userscore ++;
        userscoreMsg.innerText = userscore ;

        msg.innerText = `you win. your ${userChoice} beats ${computerchoices}` ;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscoreMsg.innerText = compscore ;
        msg.innerText = `you lose. ${computerchoices} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userChoice)=>{
   console.log("user choice",userChoice );
   // 
  const computerchoices = compgenChoice();
   console.log("comp choice", computerchoices);
   if(userChoice === computerchoices){
    drawGame();
   } else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = computerchoices === "paper" ? false : true;
    }else if (userChoice === "paper"){
        userWin = computerchoices === "scissor" ? false : true;
    }else{
        userWin = computerchoices === "rock" ? false : true;
    }
     showWinner(userWin , userChoice , computerchoices);
   }
   
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice);
    })
})