let score=JSON.parse(localStorage.getItem('score'));
      if(!score){
        score={
          wins:0,
          loses:0,
          ties:0
        };
      }

        updateScore();

        let isAutoPlaying=false;
      let intervalId;
      function autoPlay(){
        if(!isAutoPlaying){
          intervalId=setInterval(function(){
          const playerMove=pickComputerMove();
          playGame(playerMove)
        },1000);
        isAutoPlaying=true;
        }else{
          clearInterval(intervalId);
          isAutoPlaying=false;
        }
      
      }

  function playGame(playerMove){
    const computerMove=pickComputerMove();
      let result='';
    if(playerMove==='scissors'){
              if(computerMove === 'paper' ){
                result='You win';
              }else if(computerMove === 'rock'){
                result='You lost';
              }else{
                result='Tie';
              }
                }else if(playerMove === 'paper'){
                      if(computerMove === 'paper' ){
                        result='Tie';
                      }else if(computerMove === 'rock'){
                        result='You win';
                      }else{
                        result='you lost';
                      }
                }else if(playerMove==='rock'){
                      if(computerMove === 'paper' ){
                        result='you lost';
                      }else if(computerMove === 'rock'){
                        result='Tie';
                      }else{
                        result='you win';
                      }
                    }

                    document.querySelector('.js-result').innerHTML=`${result}`;
                    document.querySelector('.js-moves').innerHTML=` you <img src="./${playerMove}-emoji.png" class="move-icon"><img src="./${computerMove}-emoji.png" class="move-icon"> computer`;
                    if(result == 'you win'){
                      score.wins++;
                    }else if(result == 'you lost'){
                      score.loses++;
                    }else if(result =='Tie'){
                      score.ties++;
                    }

                    localStorage.setItem('score',JSON.stringify(score));
                    updateScore();
                       
                      }
    function updateScore(){
        document.querySelector('.js-score').innerHTML=`wins:${score.wins},losses:${score.loses},ties:${score.ties}`;
    }
      function pickComputerMove(){
        const randomNumber=Math.random();
        let computerMove='';
      if(randomNumber >= 0 && randomNumber <1/3){
        computerMove='rock';
       }else if(randomNumber >= 1/3 && randomNumber<2/3 ){
        computerMove='paper';
       }else if(randomNumber >= 2/3 && randomNumber <1){
        computerMove='scissors'
       }
       return computerMove;
      }