const fs = require('fs');

const readFileStream = (fileName, callback, start = 0) => {
  let length = start;

  const readStream = fs.createReadStream(fileName, {
    encoding: 'utf8',
    start: length
  });

  readStream.on('data', (chunk) => {
    callback(chunk);
    length += chunk.length;
  });

  readStream.on('end', () => {
    setTimeout(() => {
      readFileStream(fileName, callback, length);
    }, 100);
  });
};

module.exports = { readFileStream };
