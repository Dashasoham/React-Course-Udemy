type Combinable=number|string;
type ConversionDescriptor='as-number'|'as-string';

function combine(input1:Combinable,input2:Combinable, resultConversion:ConversionDescriptor){

    let result;
    if(
        // typeof input1 === 'number' && typeof input2 === 'number'|| 

        resultConversion==='as-number'
        ){
        result=+input1+ +input2;
    
    }else{
        result=input1.toString()+input2.toString();
    
    }
    // if(resultConversion==='as-number'){
    //     return +result
    // }else{
    //    return result.toString();
    
    // }
    return result;
}

const combinedAges=combine(30,26, 'as-number')
console.log(combinedAges);

const combinedStringAge=combine('30','26', 'as-number')
console.log(combinedStringAge);

const combinedNames=combine('Max','Anna','as-string')
console.log(combinedNames);


function greet(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
  }
   
  function isOlder(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
  }

  
  const user = {
    name: 'Max',
    age: 30,
  }
  greet(user);
  console.log(isOlder(user, 31));
  
  type User = { name: string } | string;
  let u1: User = {name: 'Max'};
  u1 = 'Michael';