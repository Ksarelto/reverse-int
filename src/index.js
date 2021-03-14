module.exports = function reverse(int) {
    var result = String(int);
    return parseInt(result.split('').reverse().join(''));
}
