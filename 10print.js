/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const sw = process.stdout.columns

let w = 0
let d = 1

function draw () {
  setTimeout(draw, 1000/24)
  if (w > sw - 1 || w < 0) {
    d = -d
  }
  w += d
  const blocks = ['▓', '▒', '▚', '▜', '▏', '░']
  const colors = ['\x1b[90m', '\x1b[92m', '\x1b[94m', '\x1b[95m']
  let output = ''
  for (let i = 0; i < w; i++) {
    let b = Math.floor(Math.random() * blocks.length)
    let c = Math.floor(Math.random() * colors.length)
    output += colors[c] + blocks[b]
  }
  console.log(output)
}

draw()
