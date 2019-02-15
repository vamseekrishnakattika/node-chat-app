var socket = io();

socket.on('updateRoomList', function (rooms) {
  rooms.forEach(function (room){
    jQuery('#rooms').append(jQuery('<option></option>').text(room));
  });
});
