// import config from './config';
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const remote = require('../src/services/remote');
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('mouse_move', (msg) => {
    remote.logMe();
    // console.log('Message: ' + msg.pageX, msg.pageY);
  });
});

http.listen(port, () => {
  console.log(`Listening on ${port}`);
});