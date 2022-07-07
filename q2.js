const allInOrNot = (input) => {
  let currentType = typeof input[0];
  let result = true;
  input.forEach((element) => {
    if (typeof element != currentType) result = false;
    
  });
  return result;
}

const input1 = [1, 2, 3]
const input2 = ["hello", true, 0]
const input3 = ["Only", "string", "array"]
const input4 = []

console.log( allInOrNot( input1))
console.log( allInOrNot( input2))
console.log( allInOrNot( input3))
console.log( allInOrNot( input4))

module.exports = allInOrNot