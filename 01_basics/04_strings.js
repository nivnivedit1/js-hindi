// (``)=> called as backticks

const gameName = new String('ni_vi')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("v"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-4,4)  // in slice we can use negetive values
console.log(anotherString);  

const name = 'nivi'
const repoCount = 10

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // follow this one fot concatination not the below comented one
// console.log(name+repoCount+"value")


