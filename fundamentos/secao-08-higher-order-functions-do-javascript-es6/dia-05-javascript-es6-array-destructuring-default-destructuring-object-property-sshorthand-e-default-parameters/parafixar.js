const primeNumbers = [17, 23, 37]

const sum = ([a, b, c]) => {
    console.log(a + c);
}

// const [n1, n2, n3] = primeNumbers

sum(primeNumbers) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal]

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo