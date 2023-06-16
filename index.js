let game = ["Rock","Paper","Scissors"]
let myAnswer;
let answer;


function gameFunc() {
    let choose = prompt("1-Rock, 2-Paper, 3- Scissors")
    if(choose==="1"){
        myAnswer=game[0];
        if(randomIndex===0){
            let answer = "Draw"
            alert ( `Computer select Rock = ${answer}`);
        }
        else if(randomIndex===1){
            let answer ="You Lose";
            alert(`Computer select Paper= ${answer}`);
        }
        else if(randomIndex===2){
            let answer ="You Win!";
            alert(`Computer select scissors = ${answer}`);
        }
    }

    else if(choose === "2"){
        myAnswer=game[1];
        if(randomIndex===0) {
            let answer="You Win!";
            alert ( `Computer select Rock = ${answer}`);
        }
        else if (randomIndex===1){
            let answer="Draw!";
            alert ( `Computer select Paper = ${answer}`);
        }
        else if(randomIndex===2){
            let answer="You lose!"
            alert ( `Computer select Scissors = ${answer}`);
        }
    }

    else if(choose==="3"){
        myAnswer=game[2];
        if(randomIndex===0){
            let answer="You Lose!";
            alert ( `Computer select Rock = ${answer}`);
        }
        else if (randomIndex===1){
            let answer="You Win!";
            alert ( `Computer select paper = ${answer}`);
        }
        else if(randomIndex===2){
            let answer="Draw!";
            alert ( `Computer select Scissors = ${answer}`);
        }

        
    }
    else{
        alert("Please select correct number")
    }
    

}

while (true) {
    let randomIndex = Math.floor(Math.random() * 3);
    gameFunc();
    let playAgain = prompt("Do you want to play again? (yes/no)");
    if (playAgain.toLowerCase() !== "yes") {
      break;
    }
  }



