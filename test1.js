const a = (require('fs').readFileSync('input.txt')+'').trim().split('\r\n')
let sum = 0
let o = 0
for (let i = 1; i <= +a[0]; i++) {
  const b = a[i].split('')
  for (let j = 0; j < b.length; j++ ) {
    if (b[j] === 'O') {
      o++
      sum += o
    } else {
      o = 0
    }
  }
  console.log(sum)
  sum = 0
}
