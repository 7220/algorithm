const fs = require("fs");

// 입력값 받아오기
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// N, M 값 추출하기
const [N, M] = input[0].split(" ").map(Number);

// A, B 행렬 값 추출하기
const A = input.slice(1, N + 1).map((row) => row.split("").map(Number));
const B = input.slice(N + 1).map((row) => row.split("").map(Number));

// 연산 횟수 초기값 설정
let count = 0;

// A와 B가 같은지 확인하는 함수
function isEqual() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] !== B[i][j]) return false;
    }
  }
  return true;
}

// 3x3 크기의 부분 행렬을 뒤집는 함수
function flip(x, y) {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      A[i][j] = 1 - A[i][j];
    }
  }
}

// 연산 수행
for (let i = 0; i < N - 2; i++) {
  for (let j = 0; j < M - 2; j++) {
    if (A[i][j] !== B[i][j]) {
      flip(i, j);
      count++;
    }
  }
}

// A와 B가 같은지 확인하여 결과 출력
console.log(isEqual() ? count : -1);
