const { port } = require("pg/lib/defaults.js");
const { WebSocket } = require("ws");

const wss = new WebSocket.Server({
    port:3000
});

wss.on('connection', (connect)=>{

    // console.log('Клиент присоединился')
    connect.on('message',(message)=>{
        wss.clients.forEach((client)=>{
            if(client.readyState ===WebSocket.OPEN){
                client.send(message.toString())
            }
        })
    })
})

