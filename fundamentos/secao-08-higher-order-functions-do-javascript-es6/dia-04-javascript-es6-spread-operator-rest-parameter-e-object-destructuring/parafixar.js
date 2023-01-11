// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Manga', 'Uva Niagara'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Suco de Laranja', 'Melancia', 'Banana'];

const fruitSalad = (fruit, additional) => {
    const saladaDeFruta = [...fruit, ...additional]
    return saladaDeFruta
};

console.log(fruitSalad(specialFruit, additionalItens));


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const newObj = { ...user, ...jobInfos }

console.log(newObj)

const { name, age, nationality, profession, squad, squadInitials } = newObj

console.log(`Olá! meu nome é ${name}, tenho ${age} anos, sou ${nationality}, trabalho com ${profession} e meu squad é ${squadInitials}-${squad}.`)