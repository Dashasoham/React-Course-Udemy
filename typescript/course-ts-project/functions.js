"use strict";
function addNumbers(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
printResults(addNumbers(5, 12));
let combineValues;
combineValues = addNumbers;
console.log(combineValues(8, 8));
function addAndHandle(a, b, callback) {
    const result = a + b;
    callback(result);
}
addAndHandle(10, 20, (result) => { console.log(result); });
function sendRequest(data, cb) {
    // ... sending a request with "data"
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
