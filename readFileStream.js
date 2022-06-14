const fs = require('fs');

const readFileStream = (fileName, start = 0) => {
  let length = start;

  const readStream = fs.createReadStream(fileName, {
    encoding: 'utf8',
    start: length
  });

  readStream.on('data', (chunk) => {
    console.log(chunk);
    length += chunk.length;
  });

  readStream.on('end', () => {
    setTimeout(() => {
      readFileStream(fileName, length);
    }, 100);
  });
};

module.exports = { readFileStream };
