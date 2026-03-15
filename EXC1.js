const prompt = require("prompt-sync")({ sigint: true });
let a = Math.floor(Math.random()*100 + 1)
console.log(a);
let userScore = 100;
let userNo;

while(userNo != a ) {
    userNo = prompt('Enter a no: ')
    if(userNo == a){
        console.log("you guessed it right");
        console.log('Your Score is : ', userScore);
    }
    else if(userNo > a){
        console.log("gussed no is grester");
        userScore--;
    }
    else if(userNo < a){
        console.log("guessed no is smaller");
        userScore--;
    }
} 



