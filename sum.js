function sumToOne(n) {
  let sum = 1;
  for (let i = n; i >= 1; i--) {
    sum += i;
  }
  return sum;
};

console.log(sumToOne(4));

module.exports = { sumToOne };
