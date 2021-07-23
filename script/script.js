var conteiner = document.getElementsByClassName('conteiner');
const acodienQandA = document.getElementsByClassName('acodienQandA');

for(var i=0;i<acodienQandA.length;i++){
    
    acodienQandA[i].addEventListener('click',function(){      
        
        for(var x=0;x<acodienQandA.length;x++){
            acodienQandA[x].classList.remove('select');
            };
            
        this.classList.add('select');
    });
};

var doc = document.documentElement,
    docheight = Math.max(doc.offsetHeight,doc.scrollHeight),
    doctop = Math.max(doc.offsetTop,doc.scrollTop,window.pageYOffset),
    offset,
    scrollpos,
    btt = document.querySelector('.backtotop');

    if(docheight != ""){
        offset = docheight / 4
    }

    window.addEventListener('scroll',function(){
        scrollpos = window.pageYOffset,doc.scrollTop,doc.offsetTop;
   
        if(scrollpos >= offset){
            btt.classList.add('visible');
        }else{
            btt.classList.remove('visible');
        };

    });

btt.addEventListener('click',function(){
    scrolltotop();
});

function scrolltotop(){
    const scrollintervar = setInterval(() => {
        if(scrollpos != 0){
            window.scrollBy(0,-130);
        }else{
            clearInterval(scrollintervar);
        }
    }, 15); 
}

//스크롤시 애니메이션

var animation = document.querySelector('.animation');
var career = document.querySelector('.career');
var PORTFOLIO = document.querySelector('.PORTFOLIO');

var aniheight = animation.offsetHeight;
var careerheight = career.offsetHeight;
var endheight = PORTFOLIO.offsetHeight+careerheight+aniheight;

var navbarlist = document.querySelectorAll('.navbar_list');

window.addEventListener('resize',function(){
    doc = document.documentElement,
    docheight = Math.max(doc.offsetHeight,doc.scrollHeight),
    doctop = Math.max(doc.offsetTop,doc.scrollTop,window.pageYOffset),
    scrollpos = window.pageYOffset,doc.scrollTop,doc.offsetTop;
    aniheight = animation.offsetHeight;
    careerheight = career.offsetHeight;
    endheight = PORTFOLIO.offsetHeight+careerheight+aniheight;
    
    console.log(careerheight)
});

navbarlist[0].addEventListener('click',function(){
     window.scrollTo({top:0, left:0, behavior:'smooth'});   
});

navbarlist[1].addEventListener('click',function(){                   
    window.scrollTo({top:aniheight, left:0, behavior:'smooth'});             
});


navbarlist[2].addEventListener('click',function(){
  
        window.scrollTo({top:aniheight+careerheight, left:0, behavior:'smooth'});
});

navbarlist[3].addEventListener('click',function(){
   window.scrollTo({top:endheight, left:0, behavior:'smooth'});   
});
