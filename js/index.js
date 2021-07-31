// 클릭시 스크롤 이동 이벤트
var winH;
const navbarlist = document.querySelectorAll('.navbar_list');
const Career = document.querySelector("#Career");
const portfolio = document.querySelector("#portfolio");
const faq = document.querySelector("#faq");
const Contact = document.querySelector("#Contact");
const footer = document.querySelector("#footer");

navbarlist[0].addEventListener('click',function(e){
    e.preventDefault();
    var Y = window.pageYOffset + Career.getBoundingClientRect().top
    window.scrollTo(0,Y);
})

navbarlist[1].addEventListener('click',function(e){
    e.preventDefault();
    var Y = window.pageYOffset + portfolio.getBoundingClientRect().top
    window.scrollTo(0,Y);
})

navbarlist[2].addEventListener('click',function(e){
    e.preventDefault();
    var Y = window.pageYOffset + faq.getBoundingClientRect().top
    window.scrollTo(0,Y);
})

navbarlist[3].addEventListener('click',function(e){
    e.preventDefault();
    var Y = window.pageYOffset + Contact.getBoundingClientRect().top
    window.scrollTo(0,Y);
})


// 스크롤 이벤트
window.addEventListener('load',Careerani);
window.addEventListener('resize',Careerani);
window.addEventListener('scroll',Careerani);

function Careerani(){

    winH = window.innerHeight;

    var scrolldelay = winH-(winH*0.3);
   
    var CareerY = Career.getBoundingClientRect().top;
    if(scrolldelay > CareerY){
        Career.classList.add('vislbleani');
    }

    var portfolioY = portfolio.getBoundingClientRect().top;
    if(scrolldelay > portfolioY){
        portfolio.classList.add('vislbleani');
    }

    var faqY = faq.getBoundingClientRect().top;
    if(scrolldelay > faqY){
        faq.classList.add('vislbleani');
    }

    var ContactY = Contact.getBoundingClientRect().top;
    if(scrolldelay > ContactY){
        Contact.classList.add('vislbleani');
    }

};