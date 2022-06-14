const fs = require('fs');
const { readFileStream } = require('./readFileStream.js');

const broadcast = (fromServer, id, message) => {
  const writeStream = fs.createWriteStream(fromServer, {
    encoding: 'utf8',
    flags: 'a'
  });

  writeStream.write(`${id}: ${message}`);
}

const establishConnection = (id, fromClient, fromServer, connections) => {
  readFileStream(fromClient, (message) => {
    console.log(`${id}: ${message}`);
    connections.forEach(({ fromServer }) => {
      broadcast(fromServer, id, message);
    });
  });
  return { id, fromClient, fromServer };
};

const main = () => {
  let connections = [];
  readFileStream('./.chat/connections', (chunk) => {
    const [id, fromClient, fromServer] = chunk.trim().split(',');
    console.log('Connection received:', id);
    const connection = establishConnection(id, fromClient, fromServer, connections);
    connections.push(connection);
  });
};

main();
