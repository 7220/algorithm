const a = (require('fs').readFileSync('/dev/stdin')+'').trim().split('\n')
const [n, k] = a.shift().split(' ').map(Number)
const jewel = []
for (let i = 0; i < n; i++) {
  jewel.push(a[i].split(' ').map(Number))
}
jewel.sort((a, b) => a[0] - b[0])

const b = a.slice(n).map(Number).sort((a, b) => a - b)

let index = 0
let max = 0
const heap = []
for (let i = 0; i < k; i++) {
  while (index < n && jewel[index][0] <= b[i]) {
    heap.push(-jewel[index][1])
    index++
  }
  if (heap.length > 0) {
    max += -heap[0]
    heap[0] = heap[heap.length - 1]
    heap.pop()
  }
}
console.log(max)