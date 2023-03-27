const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number);
const jewelry = [];
const bag = [];

for (let i = 0; i < N; i++) {
  jewelry.push(input[i].split(' ').map(Number));
}

for (let i = N; i < N + K; i++) {
  bag.push(Number(input[i]));
}

jewelry.sort((a, b) => b[1] - a[1]);
bag.sort((a, b) => a - b);

let result = 0;
const priorityQueue = [];

for (let i = 0, j = 0; i < K; i++) {
  while (j < N && jewelry[j][0] <= bag[i]) {
    priorityQueue.push(jewelry[j++][1]);
  }

  if (priorityQueue.length) {
    result += priorityQueue.shift();
  }
}

console.log(result);
