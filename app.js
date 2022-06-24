const firstRandomNum = Match.floor(Math.random() * 6 )+1

const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';

document.querySelectorAll('img') [0].setAttribute('src',firstDiceImage);


const SecondRandomNum = Match.floor(Math.random() * 6 )+1

const SecondDiceImage = 'assets/dice' + SecondRandomNum + '.png';

document.querySelectorAll('img') [1].setAttribute('src',SecondDiceImage);


if (firstRandomNum > SecondRandomNum) {
  document.querySelector('h1').innerHTML="Player 1 is winner";

} else if (firstRandomNum < SecondRandomNum) {
  document.querySelector('h1').innerHTML="Player 2 is winner";
}  else {

  document.querySelector('h1').innerHTML="No One is Winner";
}
