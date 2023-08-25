"use strict";
// const person:{
//     name:string;
//     age:number;
// }={
//     const person:{
//         name:string;
//         age:number;
//         hobbies:string[];
//         role:[number,string];
//     }={
//     name:'John Doe',
//     age:20,
//     hobbies: ['Sports', 'Cooking'],
//     role:[2,'author']
// };
// person.role.push('admin');
// person.role[1]=10;
// console.log(person.role);
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
const person = {
    name: 'John Doe',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !!! ERROR !!!
}
if (person.role === ADMIN) {
    console.log('is admin');
}
