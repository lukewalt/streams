const { Readable, Writable, Transform} = require('stream');

const readStream = Readable();
const transformStream = Transform();
const writeStream = Writable();

let i = 0;

readStream._read = () => {

  if (i > 100) {
    readStream.push(null)
  } else {
    setTimeout(() => readStream.push(`${i++}`), 10)
  }

}

transformStream._transform = (buffer, encoding, done) => {
  setTimeout(() => done(null, `${Number(buffer) * 2}`), 10)
}

writeStream._write = (buffer, encoding, done) => {
  process.stdout.write(`${buffer}\n`)
  setTimeout(done, 10)
}

readStream.pipe(transformStream).pipe(writeStream)







//anchor
