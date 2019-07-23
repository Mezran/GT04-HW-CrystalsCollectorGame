window.onload = function() {

  let totalScore = 0;
  let randomNumb = 0;
  let victories = 0;
  let loses = 0;
  let gem_blue = Math.floor(Math.random() * 12 + 1);
  let gem_green = Math.floor(Math.random() * 12 + 1);
  let gem_yellow = Math.floor(Math.random() * 12 + 1);
  let gem_red = Math.floor(Math.random() * 12 + 1);

  function checkGameStatus(){
    if (totalScore < randomNumb){
      return;
    }else if (totalScore == randomNumb){
      victories++;
      document.querySelector("#winsTotal").innerHTML = victories;
      alert("You Won!");
      initGame();
    }else{
      loses++;
      document.querySelector("#losesTotal").innerHTML = loses;
      alert("You Lost :(");
      initGame();
    }
  }


  function onClick(gem){
    totalScore += gem;
    document.querySelector(".totalScore-Counter").innerHTML = totalScore;
    checkGameStatus();
  }


  function initGame() {
    totalScore = 0;
    randomNumb = Math.floor(Math.random() * 30 + 20);
    document.querySelector(".randomNumber").innerHTML = randomNumb;
    document.querySelector(".totalScore-Counter").innerHTML = totalScore;

  }

  document.querySelector(".wrapper-crystals").addEventListener('click', function(e) {
    if (e.target.alt == 'gem-blue') {
      onClick(gem_blue);
    } else if (e.target.alt == 'gem-green') {
      onClick(gem_green);
    } else if (e.target.alt == 'gem-yellow') {
      onClick(gem_yellow);
    } else if (e.target.alt == 'gem-red') {
      onClick(gem_red);
    }
  });

  initGame();
};
