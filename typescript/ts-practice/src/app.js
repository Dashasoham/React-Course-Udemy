var e1 = { name: 'Max', privileges: ['create-server'], startDate: new Date };
console.log(2);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Date: ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
