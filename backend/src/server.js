/* eslint-disable no-console */
import app from './app';

const port = process.env.PORT || 3333;

// Criar socket.io
const socketIo = require('socket.io');
const http = require('http');

const server = http.createServer(app);
const io = socketIo(server);

// Configurar quando houver uma "connection" para novos sockets
io.on('connection', socket => {
  console.log('New client connected', socket.id);

  // Pegar data quando ouvir "sendMessage"
  socket.on('sendMessage', data => {
    // Envia para outros usuarios a data
    console.log(data);

    socket.broadcast.emit('receivedMessage', data);
  });

  // quando alguem "disconnect"
  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(port, () =>
  console.log(`Chat app listening on port port ${port}`)
);
