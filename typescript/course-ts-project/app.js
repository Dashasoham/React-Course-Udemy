function addNumbers(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(addNumbers(5, 12));
var combineValues;
combineValues = addNumbers;
console.log(combineValues(8, 8));
function addAndHandle(a, b, callback) {
    var result = a + b;
    callback(result);
}
addAndHandle(10, 20, function (result) { console.log(result); });
