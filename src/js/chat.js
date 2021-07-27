"use strict"

const socket = io();

const nickname = document.querySelector('#nickname')
const chatlist = document.querySelector(".chatting_list")
const chatinput = document.querySelector(".chatting-input")
const chatbtn = document.querySelector(".chat-btn")

chatbtn.addEventListener('click',function(){
   
    const sendbtn = {
        name:nickname.value,
        msg:chatinput.value
    };
   
    socket.emit("chatting",sendbtn)
})

socket.on("chatting",(data)=>{
    
    const msgLi = document.createElement('li'); 

   msgLi.innerHTML = `이름:${data.name} 메세지:${data.msg}`

  chatlist.prepend(msgLi)

})

console.log(socket)