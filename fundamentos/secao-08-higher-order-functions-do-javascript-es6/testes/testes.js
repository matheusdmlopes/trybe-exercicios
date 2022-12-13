users = [
    {
        name: 'Yazeed',
        age: 25
    },
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Bill',
        age: 20
    }
];
// getName = (user) => user.name;

usernames = users.map(user => user.name);

console.log(usernames);
// ["Yazeed", "Sam", "Bill"]

// startsWithB = (string) => string.toLowerCase().startsWith('b');

namesStartingWithB = users.filter((user) => user.name.toLowerCase().startsWith('b'));

console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]

const user3 = {
    name2: 'Marlete',
    age: 60
};

// desestruturamos a propriedade name e atribuímos como variável
const { name2 } = user3;

// conseguimos utilizar a propriedade como variável
console.log(name2);
console.log(user3); // Marlete

const { lasanha } = 123

console.log({ lasanha })

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800

const countParams = (...parameters) => {
    console.log('parâmetros:', parameters);
    return `Você passou ${parameters.length} parâmetros para a função.`;
}

console.log(countParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
console.log(countParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.


const arrayNumeros = [1, 2, 3, 4, 5, 6]

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current);
console.log(sum(...arrayNumeros)); // 88

const product = {
    name9: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const getValues = Object.values(product)

for (let index = 0; index < getValues.length; index += 1) {
    console.log(getValues[index])
}
// definindo o objeto
const character = {
    name6: 'Luke SkyWalker',
    age: '53',
    description: {
        specieName: 'Human',
        jedi: true,
    },
    homeWorld: {
        name6: 'Tatooine',
        population: '200000',
    },
};

// desestruturando o objeto:
const { name6, age, homeWorld: { name6: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name6}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);
