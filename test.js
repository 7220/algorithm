const a = (require('fs').readFileSync('/dev/stdin')+'').trim().split('\n')
const b = a[1].split(' ').map(Number)
const c = a[2].split(' ').map(Number)
let cost = 0
let min = c[0]
for (let i = 0; i < +a[0] - 1; i++) {
  cost += min * b[i]
  if (c[i] < min) min = c[i]
}
console.log(cost)