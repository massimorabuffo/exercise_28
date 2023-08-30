function sum(...array) {
  return array.reduce((acc, curr) => acc + curr);
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));