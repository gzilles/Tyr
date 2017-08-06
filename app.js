const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
//const axios = require('axios');
const rp = require('request-promise');
const bodyParser = require('body-parser');

const port = process.env.port || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);
app.use(bodyParser());

const server = http.createServer(app);

const options = 
{
    uri: 'https://swapi.co/api/planets/3/',
    transform: (body) => 
    {
        return body;
    }
}

const io = socketIo(server);

const getApiAndEmit = async socket => 
{
    try
    {
        rp(options)
            .then((body) => 
            {
                let bodyParsed = JSON.stringify(body);
                obj = JSON.parse(body);
                if(typeof Object == JSON.parse(body))
                {
                    console.log("bodyParsed");          
                }
                else
                {
                    console.log("Posso te fazer uma pergunta?");
                    console.log(obj.name);
                }
                socket.emit("GetYavin", obj.name); 
            })
            .catch((err) => 
            {
                console.log(err);
            });
    }
    catch(err)
    {
        console.log(err);
    }
};

let interval;

io.on("connect", socket => {
    console.log("New client connected!")
    getApiAndEmit(socket);
    if(interval)
    {
        clearInterval(interval);
    }

    interval = setInterval(() => getApiAndEmit(socket),10000);

    socket.on("disconnect", () => 
    {
        console.log("Client disconnected");
    }
    );
});

server.listen(port,() => 
{
    console.log(`Socket.io server listening on ${port}`);
});