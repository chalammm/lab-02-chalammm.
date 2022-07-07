const lazyMax = (input) => {
  return input.reduce((max, cur) => (cur > max ? (max = cur) : max));
};

//Test cases
const input1 = [0, 0, 7];
const input2 = [999, 998, 997];

console.log(lazyMax(input1));
console.log(lazyMax(input2));

module.exports = lazyMax;
