function newFunction(name, age, country) {
    var name = name || 'Santiago';
    var age = age || 25;
    var country = country || 'Col'
    console.log(name, age, country);
}

//es6
function newFunction(name = 'Santiago', age = 25, country = 'Col') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'Col');

let hello = "Hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Aqui se escribe la frase deseada \n"
+ "aqui la segunda linea de la frase.";

//es6
let lorem2 = `otra frse epica que necesitamos
ahora es otrs frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Santiago',
    'age': '25',
    'country': 'Col'
}

console.log(person.name, person.age);

let {name, age, country} = person;
console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 =['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global var"
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
console.log(a);


let name = 'Santiago';
let age = 32;

//es5
obj = {name: name, age: age};

//es6
obj2 = {name, age};
console.log(obj2);

const names = [
    {name: 'Santiago', age: 32},
    {name: 'Yesica', age: 27}
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    console.log(item.name);
}

const listOfNames4 = name => {
    console.log(item.name);
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    })
}

helloPromise()
.then(Response => console.log(Response))
.then(() => console.log('hola'))
.catch(error => console.log(error));

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import {hello} from './module';

hello();

function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatoHello = helloWorld();

console.log(generatoHello.next().value);
console.log(generatoHello.next().value);
console.log(generatoHello.next().value);

