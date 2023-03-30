const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const p = [0];

for (let i = 1; i <= n; i++) {
  p[i] = p[i - 1] + arr[i - 1];
}

let result = '';

for (let i = 0; i < m; i++) {
  const [start, end] = input[i + 2].split(' ').map(Number);
  result += `${p[end] - p[start - 1]}\n`;
}

console.log(result);
