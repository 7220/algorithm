const a = (require('fs').readFileSync('input.txt')+'').trim().split('\r\n')
const [n, m] = a[0].split(' ').map(Number);
const graph = a.slice(1).map(row => row.split('').map(Number))

console.log(graph)

const dx = [1, -1, 0, 0]
const dy = [0, 0, 1, -1]

const bfs = (x, y) => {
  const queue = [[x, y]]
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i]
      const ny = y + dy[i]
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && graph[nx][ny] === 1) {
        queue.push([nx, ny])
        graph[nx][ny] = graph[x][y] + 1
      }
    }
  }
  return graph[n - 1][m - 1]
}
console.log(bfs(0, 0))
