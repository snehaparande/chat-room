const fs = require('fs');
const { readFileStream } = require('./readFileStream.js');

const main = (id, fromClient, fromServer) => {
  readFileStream(fromServer, (message) => {
    console.log(message);
  });

  const writeStream = fs.createWriteStream(fromClient, {
    encoding: 'utf8',
    flags: 'a'
  });
  process.stdin.pipe(writeStream);
}

main(...process.argv.slice(2));
