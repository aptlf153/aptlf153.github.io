const express = require("express")
const http = require('http')
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIO = require("socket.io")
const moment = require('moment')

const io = socketIO(server);

io.on("connection", (socket) => {
    socket.on("chatting",(data)=>{
        
        console.log(data)

     io.emit("chatting",{
        name:data.name,
        msg:data.msg,
         time:moment(new Date()).format('hh:mm A')
     })
    })
})

app.use(express.static(path.join(__dirname,"src")))

const PORT = process.env.PORT || 5050;

server.listen(PORT, () =>console.log(`${PORT}`))