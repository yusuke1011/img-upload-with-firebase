const express = require('express');
const app = express();

const fs = require('fs');

const exec = require('child_process').execFile;

app.use(express.static('../frontend/dist/'));

app.get('/', (req, res) => {
    res.sendfile('../frontend/dist/index.html');
});

app.get('/api/getImg', (req, res) => {
    console.log('通信開始')

    exec('ScreenCapture.exe', err => {  
        console.log(err)                   
    }); 
    
    setTimeout(() => {
        fs.readFile('../backend/img/test.png', 'base64', (err, data) => {
            console.log(err);
            send(res, formatResponseData(data));
        });
    }, 1000)
});

const server = app.listen(3030, () => {
    console.log('listening to PORT:' + server.address().port);
});

/***Helpers***/
const send = (res, data, json = true) => {
    res.send(json ? JSON.stringify(data) : data);
};

const formatResponseData = (data) => ({ data });
