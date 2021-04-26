/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns

function draw () {
  setTimeout(draw, 1000/12)
  const blocks = ['▓', '▒', '▚', '▜', '▏', '░']
  // const blocks = ["U+0783"]
  // const colors = ['\xlb[90m', '\xlb[92m']
  let output = ''
  for (let i = 0; i < w; i++) {
    let b = Math.floor(Math.random * blocks.length)
    // let c = Math.floor(Math.random * colors.length)
    output += blocks[b]
  }
  console.log(output)
}

draw()
