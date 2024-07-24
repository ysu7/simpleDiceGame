var player1Images = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png'
];

var player2Images = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png'
];


var randomNumber1 =  Math.floor(Math.random() * player1Images.length);
document.querySelector('.img1').src = player1Images[randomNumber1];

var randomNumber2 = Math.floor(Math.random() * player2Images.length);
document.querySelector('.img2').src = player2Images[randomNumber2];

console.log(randomNumber1, randomNumber2);

if (randomNumber1> randomNumber2){
    console.log("player1 Win!");
    document.querySelector(".result").innerHTML="player1 Win!";
} else if(randomNumber2>randomNumber1){
    console.log("player2 wins!")
    document.querySelector(".result").innerHTML="player2 Win!";
}else{
    console.log("draw!")
    document.querySelector(".result").innerHTML="draw!";
}