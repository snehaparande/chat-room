const fs = require('fs');
const { readFileStream } = require('./readFileStream.js');

const main = (id, fromClient, fromServer) => {
  readFileStream(id, fromClient);

  const writeStream = fs.createWriteStream(fromServer, {
    encoding: 'utf8',
    flags: 'a'
  });
  process.stdin.pipe(writeStream);
};

main(...process.argv.slice(2));
