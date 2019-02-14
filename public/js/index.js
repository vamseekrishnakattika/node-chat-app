var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');
  socket.emit('createMessage',{
    from:'jen@example.com',
    text:'Hey John'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage',message);
});
