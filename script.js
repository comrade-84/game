'use strict';
// document.querySelector('.guess') ; 
const inputValue = document.getElementById('guess');
const checkBtn = document.getElementById('check');
const resetBtn = document.getElementById('again');

let hiddenNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

 function checker (){
    if (!inputValue.value) {
        document.querySelector('.message').textContent = `No number`;
    }
    else if (inputValue.value == hiddenNumber) {
            document.querySelector('.highscore').textContent = score;
        document.querySelector('.message').textContent = ` 😎😎😎correct number`;
        document.querySelector('.number').textContent = hiddenNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        
        
    }
    else if(inputValue.value > hiddenNumber){
        if (score <= 0) {
           document.querySelector('.message').textContent = ` you lost the game`;
        }
       else{
         document.querySelector('.message').textContent = `⚡ Too High`;
        score--;
        document.querySelector('.score').textContent = score;
       }
        
    }
    else if(inputValue.value < hiddenNumber){
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
)