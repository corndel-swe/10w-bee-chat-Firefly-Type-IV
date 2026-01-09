import { WebSocketServer } from "ws";

// methods within on are the handlers, i.e. what to do when 'message' is recieved
const server = new WebSocketServer({ port: 5001 });

// list of clients connected to the server
let sockets = [];
let messageId = 0;

const greeting = JSON.stringify({
    senderId: "admin",
    content: "Hello from the server!",
    id: "greet-0"
})

server.on("connection", socket => {
    socket.send(greeting);
    // store the connection
    sockets.push(socket);

    // When recieving a message
    socket.on("message", message => {
        const clientMessage = JSON.parse(message);
        const {recipientId, content} = clientMessage;

        // need to implement counter to increment message id
        clientMessage.id = `${messageId++}`
        console.log(messageId)

        for (let recipient of sockets) {
            recipient.send(JSON.stringify({senderId: sockets.indexOf(socket), content: content, id: clientMessage.id}))
        }
        
    })

    socket.on("close", () => {
        console.log('User has disconnected')
    })
});