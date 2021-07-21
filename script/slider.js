var picwrap = document.querySelector('.picwrap');
var pic = document.querySelectorAll('.pic');

//휠 이벤트 진행 순서
var idx = 0;

//li width 구하기
var picW = pic[0].offsetWidth;

//li 생성 제한
var liLimit = 30;

//li를 감싼 ul의 width, height값 구하기
function picwrapsize(){
    picwrap.style.width = pic.length+9 + 'vw';
    picwrap.style.height = pic.length+9 + 'vw';
};
picwrapsize();

//li끼리의 간격
for(var i=0;i<pic.length;i++){
    pic[i].style.marginRight = i*1 + 'vw';
    pic[i].style.marginTop = i*1 + 'vw';
};

//윈도우에서 마우스 휠 이벤트 진행시 li 모션 
window.addEventListener('mousewheel',visible)
function visible(e){
    
    for(var p=0;p<pic.length;p++){
        pic[p].classList.remove('visible');
    };
    
    
    if(e.wheelDelta === +120){
    idx += 1;
        
    if(idx == pic.length){
        idx = 0;
       };

    pic[idx].classList.add('visible');
       }else{
           
    idx -= 1;
           
       if(idx == -1){
           idx = pic.length-1;
       };
           
    pic[idx].classList.add('visible');
       };

};


//윈도우에서 마우스 휠 이벤트 진행시 크게 보이는곳
window.addEventListener('mousewheel',showpic)

function showpic(){       
var bigshow = document.querySelector('.bigshow');
var picshow = pic[idx].cloneNode(true);

if ( bigshow.hasChildNodes() ) {
bigshow.removeChild( bigshow.childNodes[0] );
}   
    
bigshow.appendChild(picshow);

picshow.style.marginTop =0;
    picshow.style.textTransform ='';
    picshow.classList.remove('visible');
};


var upbtn = document.querySelector('.btn.up');
var downbtn = document.querySelector('.btn.down');
var countbtn = document.querySelector('.btn.count');

//li 추가버튼 클릭시 
upbtn.addEventListener('click',addpic);

function addpic(){

    if(pic.length<=liLimit-1){
      
        var limake = document.createElement('li'); 
        limake.classList.add('pic');
        limake.innerHTML = '300x300';
        picwrap.prepend(limake);
        pic = document.querySelectorAll('.pic');
        
        picwrap.style.width = pic.length+9 + 'vw';
        picwrap.style.height = pic.length+9 + 'vw';
    
        for(var i=0;i<pic.length;i++){
            pic[i].style.marginRight = i*1 + 'vw';
            pic[i].style.marginTop = i*1 + 'vw';
        };

    };

};

downbtn.addEventListener('click',removepic)

function removepic(){

    if(pic.length>2){
        
    picwrap.removeChild( picwrap.childNodes[0]);

    pic = document.querySelectorAll('.pic');
    picwrap.style.width = pic.length+9 + 'vw';
    picwrap.style.height = pic.length+9 + 'vw';

    for(var i=0;i<pic.length;i++){
        pic[i].style.marginRight = i*1 + 'vw';
        pic[i].style.marginTop = i*1 + 'vw';
    };

    };

};