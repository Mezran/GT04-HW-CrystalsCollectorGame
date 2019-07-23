window.onload = function() {

  let totalScore = 0;

  let gem_blue = Math.floor(Math.random() * 12 + 1);
  let gem_green = Math.floor(Math.random() * 12 + 1);
  let gem_yellow = Math.floor(Math.random() * 12 + 1);
  let gem_red = Math.floor(Math.random() * 12 + 1);



  function initGame() {
    let randomNumb = Math.floor(Math.random() * 30 + 20);
    document.querySelector(".randomNumber").innerHTML = randomNumb;
    document.querySelector(".totalScore-Counter").innerHTML = totalScore;

  }

  document.querySelector(".wrapper-crystals").addEventListener('click', function(e) {
    console.log(e.target.alt);
    if (e.target.alt == 'gem-blue') {
      totalScore += gem_blue;
      document.querySelector(".totalScore-Counter").innerHTML = totalScore;
    } else if (e.target.alt == 'gem-green') {
      totalScore += gem_green;
      document.querySelector(".totalScore-Counter").innerHTML = totalScore;
    } else if (e.target.alt == 'gem-yellow') {
      totalScore += gem_yellow;
      document.querySelector(".totalScore-Counter").innerHTML = totalScore;
    } else if (e.target.alt == 'gem-red') {
      totalScore += gem_red;
      document.querySelector(".totalScore-Counter").innerHTML = totalScore;
    }
  });

  initGame();
};
