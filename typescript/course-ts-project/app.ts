function addNumbers(n1:number,n2:number){
    return n1+n2
} 


function printResult(num:number){
    console.log('Result: ' + num)

}

printResult(addNumbers(5,12))

let combineValues:(a:number,b:number)=>number;
combineValues = addNumbers;
console.log(combineValues(8,8))


function addAndHandle(a:number, b:number, callback:(num:number)=>void){
    const result=a+b;
    callback(result)
}

addAndHandle(10,20,(result)=>{console.log(result)});


