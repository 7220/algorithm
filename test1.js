const a = (require('fs').readFileSync('input.txt')+'').trim().split('\r\n')
const [n, k] = a.shift().split(' ').map(Number)
const jewel = []
const b = []
for (let i = 0; i < n; i++) {
  jewel.push(a[i].split(' ').map(Number))
}
for (let i = n; i < n + k; i++) {
  b.push(+a[i])
}
console.log(jewel, b)