module.exports = function reverse (n) {
    let str = n.toString();
  if (n < 0) return str.slice(1).split('').reverse().join('');
  return str.split('').reverse().join('');
}
