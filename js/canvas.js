var canvas = document.querySelector('.canvas');
console.log(canvas);
var ctx = canvas.getContext('2d');

var wavemax =100;
var wavemin =0;
var wavespeed = 2;
var wavecolor='#00CDFF';

var oneX = 0;
var oneXp = wavespeed;

var twoX = 10;
var twoXp = wavespeed;

var threeX = 20;
var threeXp = wavespeed;

var fourX = 30;
var fourXp = wavespeed;

var fiveX = 40;
var fiveXp = wavespeed;

var sixX = 50;
var sixXp = wavespeed;

//물결실행

function draw(){

    ctx.beginPath();
    ctx.moveTo(0,30);
   ctx.quadraticCurveTo(-50,oneX,30,oneX);
    ctx.quadraticCurveTo(50,oneX,100,twoX);
    ctx.quadraticCurveTo(100,twoX,150,threeX);
    ctx.quadraticCurveTo(150,threeX,200,fourX);
    ctx.quadraticCurveTo(200,fourX,250,fiveX);
    ctx.quadraticCurveTo(300,fiveX,350,30); 

    ctx.lineTo(300,50);
    ctx.lineTo(300,200);
    ctx.lineTo(0,200);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = wavecolor;

};

function update(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas .clientHeight);

    draw();

    oneX += oneXp;
    twoX += twoXp;
    threeX += threeXp;
    fourX += fourXp;
    fiveX += fiveXp;
    sixX += sixXp;

    if(oneX > wavemax){
        oneXp *= -1;
    };

    if(oneX < wavemin){
        oneXp *= -1;
        twoX = 10;
        threeX = 20;
        fourX = 30;
        fiveX = 40;
        sixX = 50;
    };

    if(twoX > wavemax){
        twoXp *= -1;
    };

    if(twoX < wavemin){
        twoXp *= -1;
    };

    if(threeX > wavemax){
        threeXp *= -1;
    };

    if(threeX < wavemin){
        threeXp *= -1;
    };

    if(fourX > wavemax){
        fourXp *= -1;
    };

    if(fourX < wavemin){
        fourXp *= -1;
    };

    if(fiveX > wavemax){
        fiveXp *= -1;
    };

    if(fiveX < wavemin){
        fiveXp *= -1;
    };

    if(sixX > wavemax){
        sixXp *= -1;
    };

    if(sixX < wavemin){
        sixXp *= -1;
    };

    requestAnimationFrame(update);
};

update();

var speedbtn = document.querySelectorAll('.speedbtn');

speedbtn[1].innerHTML = wavespeed;

speedbtn[0].addEventListener('click',function(){

    if(wavespeed>=10){
        alert('더이상 속도를 올릴 수 없습니다.');
         wavespeed = 10;
         speedbtn[1].innerHTML = wavespeed;
         oneXp = wavespeed;
         twoXp = wavespeed;
         threeXp = wavespeed;
         fourXp = wavespeed;
         fiveXp = wavespeed;
         sixXp = wavespeed;
         oneX = 10;
        twoX = 20;
        threeX = 30;
        fourX = 40;
        fiveX = 50;
        sixX = 60;
         
    }else{
        wavespeed += 1;
        speedbtn[1].innerHTML = wavespeed;
        oneXp = wavespeed;
        twoXp = wavespeed;
        threeXp = wavespeed;
        fourXp = wavespeed;
        fiveXp = wavespeed;
        sixXp = wavespeed;
        oneX = 10;
        twoX = 20;
        threeX = 30;
        fourX = 40;
        fiveX = 50;
        sixX = 60;
    };
 
});

speedbtn[2].addEventListener('click',function(){

    if(wavespeed<=0){
       alert('더이상 속도를 내릴 수 없습니다.');
        wavespeed = 0;
        speedbtn[1].innerHTML = wavespeed;
        oneXp = wavespeed;
        twoXp = wavespeed;
        threeXp = wavespeed;
        fourXp = wavespeed;
        fiveXp = wavespeed;
        sixXp = wavespeed;
        oneX = 10;
        twoX = 20;
        threeX = 30;
        fourX = 40;
        fiveX = 50;
        sixX = 60;
   }else{
    wavespeed -= 1;
    speedbtn[1].innerHTML = wavespeed;
    oneXp = wavespeed;
    twoXp = wavespeed;
    threeXp = wavespeed;
    fourXp = wavespeed;
    fiveXp = wavespeed;
    sixXp = wavespeed;
    oneX = 10;
    twoX = 20;
    threeX = 30;
    fourX = 40;
    fiveX = 50;
    sixX = 60;
   };

});


//물결 색상 변경

var wavecolorless = document.querySelectorAll('.wavecolor');

wavecolorless[0].addEventListener('click',function(){
    wavecolor = '#FFA2AD';
    
});

    wavecolorless[1].addEventListener('click',function(){
        wavecolor = '#00CDFF';
    });

    wavecolorless[2].addEventListener('click',function(){
        wavecolor = '#78E150';
    });


