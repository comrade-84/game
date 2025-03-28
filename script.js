'use strict';
//extracting our varibles directly from html 
const inputValue = document.getElementById('guess');
const checkBtn = document.getElementById('check');
const resetBtn = document.getElementById('again');


//creating the hidden or secrete number
let hiddenNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

//writing the functionality of the whole game
 function checker (){
    //checking if there is a true number in the input field
    if (!inputValue.value) {
        document.querySelector('.message').textContent = `No number`;
    }
    // a scenario in which the game is won
    else if (inputValue.value == hiddenNumber) {
            document.querySelector('.highscore').textContent = score;
        document.querySelector('.message').textContent = ` 😎😎😎correct number`;
        document.querySelector('.number').textContent = hiddenNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        
        
    }
    //a scenario in which the input number is greater than the secrete number
    else if(inputValue.value > hiddenNumber){

        // to cancel the game if score is less than 0
        if (score <= 0) {
           document.querySelector('.message').textContent = ` you lost the game`;
        }
       else{
         document.querySelector('.message').textContent = `⚡ Too High`;
         // decrement the score on each failed attempt
        score--;
        document.querySelector('.score').textContent = score;
       }
        
    }

    // a scenario in which the input value is less than the secrete number
    else if(inputValue.value < hiddenNumber){
         // to cancel the game if score is less than 1
        if (score <= 0) {
            document.querySelector('.message').textContent = ` you lost the game`;
        }
        else{
            document.querySelector('.message').textContent = `📭 Too Low`;
        score--;
         document.querySelector('.score').textContent = score;
        }

        
    }
}

// the reset function of the game
function reset (){
    document.querySelector('.message').textContent = `Start guessing...` ;
    document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
    inputValue.value = "";
    document.querySelector('.number').textContent = '?';
    score = 20;
    document.querySelector('.score').textContent = score;
    hiddenNumber = Math.trunc(Math.random() * 20 + 1);
}
document.addEventListener('keydown', function(r){
    if(r.key === "Enter"){
        if(inputValue.value){
            checker();
            inputValue.value = "";
            
        }
    }
    
    
});
checkBtn.addEventListener('click',
    function(){
       checker() ;
       inputValue.value = "";
    }
);

resetBtn.addEventListener("click", 
    function(){
        reset();
    }
);
