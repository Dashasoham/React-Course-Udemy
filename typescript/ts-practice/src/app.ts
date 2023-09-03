type Admin={
    name:string;
    privileges:string[];

}

type Employee={
    name:string;
    startDate:Date;

}

type ElevatedEmployee=Admin & Employee;

const e1:ElevatedEmployee={name:'Max',privileges:['create-server'],startDate:new Date}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;
console.log(2);



function add(a:Combinable,b:Combinable){
    if(typeof a==='string'||typeof b==='string'){
        return a.toString()+b.toString();
    }
    return a+b;
}

type UnknownEmployee=Employee|Admin;



function printEmployeeInformation(emp:UnknownEmployee){
    console.log('Name: '+emp.name);
    if('privileges' in emp){
        console.log('Privileges: '+emp.privileges);
    
    }
    if('startDate' in emp){
        console.log('Date: '+emp.startDate);
    }
}
printEmployeeInformation(e1);


interface Bird{
    type:'bird';
    flyingSpeed:number;

}

interface Horse{
    type:'horse';
    runningSpeed:number;


}

type Animal=Bird|Horse;

function moveAnimal(animal:Animal){
    if ('flyingSpeed' in animal){
    console.log('Moving with speed: '+animal.flyingSpeed);}
}
