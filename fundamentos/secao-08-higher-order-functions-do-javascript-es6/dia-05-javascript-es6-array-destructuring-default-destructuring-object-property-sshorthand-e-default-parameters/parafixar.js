const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
    console.log(a + b);
}

const [n1, n2, n3] = primeNumbers

sum(n1, n3) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring