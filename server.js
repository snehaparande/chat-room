const fs = require('fs');
const { readFileStream } = require('./readFileStream.js');

const main = () => {
  readFileStream('./fromClient');

  const writeStream = fs.createWriteStream('./fromServer', {
    encoding: 'utf8',
    flags: 'a'
  });
  process.stdin.pipe(writeStream);
};

main();
