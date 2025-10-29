let userscore = 0
let compscore = 0

let choices = document.querySelectorAll(".choice")

const compgenChoice = ()=>{
    const optinons = ["rock", "paper", "scissor"];
    const compchoice = Math.floor(Math.random()* 3);
    return optinons[compchoice];
}

const drawGame = ()=>{
    console.log("game is draw");
    
}



const playGame = (userChoice)=>{
   console.log("user choice",userChoice );
   // 
  const computerchoices = compgenChoice();
   console.log("comp choice", computerchoices);
   if(userChoice === computerchoices){
    drawGame();
   }
   
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id")
        
        playGame(userChoice);
    })
})