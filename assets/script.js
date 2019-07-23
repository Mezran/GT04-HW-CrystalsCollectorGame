window.onload = function() {



  function generateRandomNumber(){
    //get a number between 1 and 40
    return Math.floor(Math.random()*40+1);
  }


  let randomNumb = generateRandomNumber();
  document.querySelector(".randomNumber").innerHTML = randomNumb;

};
