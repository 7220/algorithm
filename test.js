const a = (require('fs').readFileSync('/dev/stdin')+'').trim().split('\n')
const n = parseInt(a[0]);
const m = parseInt(a[1]);
const graph = Array.from(Array(n + 1), () => []);
for (let i = 2; i < m + 2; i++) {
  const [a, b] = a[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(n + 1).fill(false);
let count = 0;

const dfs = (v) => {
  visited[v] = true;
  count++;

  for (let i = 0; i < graph[v].length; i++) {
    const next = graph[v][i];
    if (!visited[next]) {
      dfs(next);
    }
  }
}

dfs(1);
console.log(count - 1);
