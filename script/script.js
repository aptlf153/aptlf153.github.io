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
   window.scrollTo({top:docheight, left:0, behavior:'smooth'});   
});

navbarlist[5].addEventListener('click',function(){
    window.scrollTo({top:0, left:0, behavior:'auto'});  
    mobilMeunClose(); 
});

navbarlist[6].addEventListener('click',function(){                   
   window.scrollTo({top:aniheight, left:0, behavior:'auto'});    
   mobilMeunClose();         
});

navbarlist[7].addEventListener('click',function(){
       window.scrollTo({top:aniheight+careerheight, left:0, behavior:'auto'});
       mobilMeunClose();
});

navbarlist[8].addEventListener('click',function(){
  window.scrollTo({top:docheight, left:0, behavior:'auto'});  
  mobilMeunClose(); 
});


const mobil = document.querySelector('.mobil');
const navbarmenu = document.querySelector('.navbar_menu');
const shade = document.querySelector('.shade');
const mobil_navbar_menu = document.querySelector('.mobil_navbar_menu');

mobil.addEventListener('click',function(){
    shade.style.display = 'block';
    mobil_navbar_menu.style.right = '0'+'%';
});

function mobilMeunClose(){
    shade.style.display = 'none';
    mobil_navbar_menu.style.right = -'45'+'%';
};

navbarlist[4].addEventListener('click',function(){
    mobilMeunClose();
 });

 shade.addEventListener('click',function(){
    mobilMeunClose();
 });


 // 프로필 

 const profille = document.querySelector('.profille');
const infobox = document.querySelector('.infobox');

 window.addEventListener('scroll',function(){
    if(scrollpos > animation.offsetHeight/2){
        profille.classList.add('profillevisible');
        infobox.classList.add('infoboxvisible');
     }
 });

 window.addEventListener('resize',function(){
     if(window.innerHeight > career.offsetTop+(animation.offsetHeight/2)){
        profille.classList.add('profillevisible');
        infobox.classList.add('infoboxvisible');
     }
 })

 if(window.innerHeight > career.offsetTop+(animation.offsetHeight/2)){
    profille.classList.add('profillevisible');
    infobox.classList.add('infoboxvisible');
 }

 //포폴
 const project = document.querySelectorAll('.project');
 const  acodienbox = document.querySelector('.acodien_box');

 window.addEventListener('scroll',function(){
    if(scrollpos > career.offsetTop+(career.offsetHeight/3)){
        PORTFOLIOevnt();
     }
 });

 window.addEventListener('resize',function(){
     if(window.innerHeight > PORTFOLIO.offsetTop*0.8){
        PORTFOLIOevnt();
     }
 })

 if(window.innerHeight > PORTFOLIO.offsetTop*0.8){
    PORTFOLIOevnt();
 }


function PORTFOLIOevnt(){
    PORTFOLIO.classList.add('PORTFOLIOvisible');   
    project[0].classList.add('projectvisible');
    this.setTimeout(function(){project[1].classList.add('projectvisible'); },50)
    this.setTimeout(function(){project[2].classList.add('projectvisible'); },100)
    this.setTimeout(function(){project[3].classList.add('projectvisible'); },150)
    this.setTimeout(function(){project[4].classList.add('projectvisible'); },200)
    this.setTimeout(function(){project[5].classList.add('projectvisible'); },250)
}

window.addEventListener('scroll',function(){
    if(scrollpos > PORTFOLIO.offsetTop+(PORTFOLIO.offsetHeight/3)){
        acodienbox.classList.add('acodien_boxvisible');
     }
 });

 window.addEventListener('resize',function(){
    if(window.innerHeight > acodienbox.offsetTop*0.5){
        acodienbox.classList.add('acodien_boxvisible');
    }
})

if(window.innerHeight > acodienbox.offsetTop*0.5){
    acodienbox.classList.add('acodien_boxvisible');
}

const footer = document.querySelector('footer');

window.addEventListener('scroll',function(){
    if(scrollpos > PORTFOLIO.offsetTop+(PORTFOLIO.offsetHeight/1.5)){
        footer.classList.add('footervlsible');
     }
 });

 
 window.addEventListener('resize',function(){
    if(window.innerHeight > acodienbox.offsetTop*0.4){
        footer.classList.add('footervlsible');
    }
})

if(window.innerHeight > acodienbox.offsetTop*0.4){
    footer.classList.add('footervlsible');
}