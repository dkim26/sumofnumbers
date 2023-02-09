function forLoop() {
  const testNums = [4, 6, 3];
  let sum = 0;
  for (let i = 0; i < testNums.length; i++) {
    sum += testNums[i];
  }
  return sum;
}
console.log(forLoop());

function whileLoop() {
  const testNums = [7, 3, 9];
  let i = 0;
  let sum = 0;
  while (i < testNums.length) {
    sum += testNums[i];
    i++;
  }
  return sum;
}
console.log(whileLoop());

function sumArray(list, index =0) {
  if (index === list.length) {
    return 0;
  }
 else
   return list[0] + sumArray(list, index+ 1);
}
console.log(sumArray([4, 5, 8])); // outputs 17
