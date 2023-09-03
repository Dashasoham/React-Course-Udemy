// const names=[];

// const promise:Promise<string>=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('This is done!');
//         reject('Something went wrong!')
//     }
//     , 2000);
// })

function merge<T extends object,U>(objA:T,objB:U){
    return Object.assign(objA,objB);

}

const mergedObj=merge({name:'Max'}, {age:30});
console.log(mergedObj.name);