const clients = [];

const websocket = (socket, req) => {
  clients.push(socket);
  socket.on('message', (message) => {
    for (const client of clients) {
      if (client.readyState = 1) {
        client.send(`Message is: ${message}`);
      }
    }
  });
};

export default websocket;
