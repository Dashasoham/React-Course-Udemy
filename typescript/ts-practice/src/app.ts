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

interface Lengthy{
    length:number;

}

function countAndDescribe<T extends Lengthy>(element:T){
    let descriptionText="No Value"
    if(element.length===1){
        descriptionText="Got 1 element."
    
    }else if(element.length>1){
        descriptionText="Got "+element.length+" elements."
    }
return [element,descriptionText]}

console.log(countAndDescribe(10));