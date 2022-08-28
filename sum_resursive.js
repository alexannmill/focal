function sumToOneResur(n) {
  if (n === 1){
    return 1;
  }
  return n = n +sumToOne(n -1);
}
console.log(sumToOne(4));

module.exports = { sumToOneResur };