const plus = document.querySelector('#plus'),
    minus = document.querySelector('#minus'),
    pause = document.querySelector('#pause'),
    num = document.querySelector('#counter'),
    heart = document.querySelector('#heart');
    
    let counterValue = 0;
    const counter = document.getElementById('counter');
    let timeout;

    //**************  AUTO TIMER  ****************
    
    function startit(){
        document.addEventListener('DOMContentLoaded', () => {       
        timeout = setInterval(myTimer, 1000)          
        });
        
    }
startit();
   
    function myTimer(){
        counterValue++;
        counterValue = (counterValue < 10) ? "0" + counterValue : counterValue;
        num.innerHTML = counterValue;   
    }

    //**************  PAUSE  ****************
   
//     function stopit(){
//         pause.addEventListener('click', () => {
//             pause.textContent = 'Resume';
//             netoyer();
//         })
//     }
//     stopit(); 
      
// function netoyer(){
//     clearInterval(timeout);                    
//     plus.disabled = true; 
//     minus.disabled=true
//     heart.disabled = true 
// }    

// const pauseBtn = document.getElementById('pause');
let isPaused = false;
let timerId = null;

pause.addEventListener('click', () => {
  if (isPaused) {
    // resume timer
    timerId = setInterval(myTimer, 1000);
    isPaused = false;
    pause.textContent = 'pause';
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
  } else {
    // pause timer
    clearInterval(timeout);
    isPaused = true;
    pause.textContent = 'resume';
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
  }
});

    //**************  INCREMENT & DECREMENT  ****************

//-------- Increment ------------
    function add() {

     plus.addEventListener('click', () => {
        counterValue++;
        counterValue = (counterValue < 10) ? "0" + counterValue : counterValue;
        num.innerHTML = counterValue;
        })
    }
    add()

    //--------  Decrement ---------------

    minus.addEventListener('click', () => {
        if(counterValue > 0){
            counterValue--;
            counterValue = (counterValue < 10) ? "0" + counterValue : counterValue;
            num.innerHTML = counterValue;
        }
        
    })

    //--------  Heart ---------------

    function addHeart(){
        heart.addEventListener('click', () => {
        counterValue++;
        counterValue = (counterValue < 10) ? "0" + counterValue : counterValue;
        num.innerHTML = counterValue;
    })
}
    

    

const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('list');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value;
  
  const newComment = document.createElement('li');
  newComment.innerText = commentText;
  
  commentList.appendChild(newComment);
  
  commentInput.value = '';
});




