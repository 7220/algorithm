const a = (require('fs').readFileSync('/dev/stdin')+'').trim().split('\n')

for (let i = 1; i <= a[0]; i++) {
  const b = a[i].split('')
  console.log(b)
}