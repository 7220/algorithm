const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const T = +input[0];

let idx = 1;
for (let i = 0; i < T; i++) {
  const [M, N, K] = input[idx++].split(' ').map(Number);
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  let count = 0;

  for (let j = 0; j < K; j++) {
    const [x, y] = input[idx++].split(' ').map(Number);
    field[y][x] = 1;
  }

  const dfs = (x, y) => {
    visited[y][x] = true;

    if (x > 0 && field[y][x - 1] === 1 && !visited[y][x - 1]) dfs(x - 1, y);
    if (x < M - 1 && field[y][x + 1] === 1 && !visited[y][x + 1]) dfs(x + 1, y);
    if (y > 0 && field[y - 1][x] === 1 && !visited[y - 1][x]) dfs(x, y - 1);
    if (y < N - 1 && field[y + 1][x] === 1 && !visited[y + 1][x]) dfs(x, y + 1);
  };

  for (let j = 0; j < N; j++) {
    for (let k = 0; k < M; k++) {
      if (field[j][k] === 1 && !visited[j][k]) {
        dfs(k, j);
        count++;
      }
    }
  }

  console.log(count);
}
