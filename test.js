const a = (require('fs').readFileSync('/dev/stdin')+'').trim().split('\n')
const [n, m] = a[0].split(' ').map(Number)
const arr = a[1].split(' ').map(Number)
const b = [0]

for (let i = 1; i <= n; i++) {
  b[i] = b[i - 1] + arr[i - 1]
}

let str = ''

for (let i = 0; i < m; i++) {
  const [s, e] = a[i + 2].split(' ').map(Number)
  str += `${b[e] - b[s - 1]}\n`
}
console.log(str)