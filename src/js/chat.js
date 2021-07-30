"use strict"

const socket = io();

const nickname = document.querySelector('#nickname')
const chatlist = document.querySelector(".chatting_list")
const chatinput = document.querySelector(".chatting-input")
const chatbtn = document.querySelector(".chat-btn")
const displaycontainer = document.querySelector(".display-container")

chatinput.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
        send()
    }
})

function send(){
   
    const sendbtn = {
        name:nickname.value,
        msg:chatinput.value
    };
   
    socket.emit("chatting",sendbtn)
}


chatbtn.addEventListener('click',send)

socket.on("chatting",(data)=>{

    const msgLi = document.createElement('li'); 
    const Dom = `
    <span class="profile">
    <span class="user">${data.name}</span>
    <img src="http://placeimg.com/100/100/any">
      </span>
    <span class="message">${data.msg}</span>
    <span class="time">${data.time}</span>         
    `;

    msgLi.classList.add(nickname.value === data.name ? "sent":"received")


    msgLi.innerHTML = Dom;
    chatlist.appendChild(msgLi)
    displaycontainer.scrollTo(0,displaycontainer.scrollHeight)
    chatinput.value = ''

})

    

console.log(socket)