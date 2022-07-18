
const cards = document.querySelectorAll(".memory-card");


let hasFlipppedCard = false;
let lockBoard = false;
let firstCard,secondCard;





let text = document.getElementById("text");
var Interval;
var seconds = 00; 
var tens = 00; 
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var counter = 0;



function flipCard(){


    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);


    if(this == firstCard) return;
    if(lockBoard)
        return;
    
  
    this.classList.add('flip');

    if(!hasFlipppedCard){
        hasFlipppedCard = true;
        firstCard = this;

       return;
    }
    secondCard = this;


    



        match();



    

}


function match(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;


    isMatch? disableCard(): unflipCards();

}



function disableCard(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    counter++;
    check();
    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(()=>{

        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
        
    },800);
}


function resetBoard(){
   [hasFlipppedCard,lockBoard] = [false,false];
   [firstCard,secondCard] = [null,null];
}


(function shuffle(){
    cards.forEach(card=>{
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;               //this is the property of the flex 
                                                    //that it give every element a order and aliign them according to the element
    })
})();   //this is how it will act as the first function as the page load



function check(){
    if(counter>=6){
        clearInterval(Interval);
        text.innerHTML = "Your Best Time is "+seconds+":"+tens;
        return;
    }
}



function startTimer () {
    tens++; 
      
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
      
    if (tens > 9){
      appendTens.innerHTML = tens;
        
    } 
      
    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
      
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    
  }






  

cards.forEach(card => card.addEventListener('click',flipCard));

