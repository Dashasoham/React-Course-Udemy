function addNumbers(n1:number,n2:number){
    return n1+n2
} 


function printResults(num:number){
    console.log('Result: ' + num)

}

printResults(addNumbers(5,12))

let combineValues:(a:number,b:number)=>number;
combineValues = addNumbers;
console.log(combineValues(8,8))


function addAndHandle(a:number, b:number, callback:(num:number)=>void){
    const result=a+b;
    callback(result)
}

addAndHandle(10,20,(result)=>{console.log(result)});

function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending a request with "data"
    return cb({data: 'Hi there!'});
  }
   
  sendRequest('Send this!', (response) => { 
    console.log(response);
    return true;
   });


