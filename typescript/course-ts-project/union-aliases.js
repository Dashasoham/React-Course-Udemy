"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if (
    // typeof input1 === 'number' && typeof input2 === 'number'|| 
    resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if(resultConversion==='as-number'){
    //     return +result
    // }else{
    //    return result.toString();
    // }
    return result;
}
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedStringAge = combine('30', '26', 'as-number');
console.log(combinedStringAge);
const combinedNames = combine('Max', 'Anna', 'as-string');
console.log(combinedNames);
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
const user = {
    name: 'Max',
    age: 30,
};
greet(user);
console.log(isOlder(user, 31));
let u1 = { name: 'Max' };
u1 = 'Michael';
