const { createReadStream } = require('fs');

const readStream = createReadStream('names.txt')

// readStream.pipe(process.stdout)

readStream.on('data', (buffer) => {
  readStream.pause();
  process.stdout.write(buffer.toString())
})

const timer = setInterval(() => readStream.resume(), 2000)

readStream.on('end', () => {
  clearInterval(timer)
})
