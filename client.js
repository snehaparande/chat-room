const fs = require('fs');
const { readFileStream } = require('./readFileStream.js');

const main = () => {
  readFileStream('./fromServer');

  const writeStream = fs.createWriteStream('./fromClient', {
    encoding: 'utf8',
    flags: 'a'
  });
  process.stdin.pipe(writeStream);
}

main();
