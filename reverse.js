var input = process.argv[2];

if (input)
  console.log(reverse(input));

function reverse(input) {
  return input.split('').reverse().join('');
}

module.exports = { reverse };