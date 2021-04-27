/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns

function draw () {
  setTimeout(draw, 1000/12)
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
