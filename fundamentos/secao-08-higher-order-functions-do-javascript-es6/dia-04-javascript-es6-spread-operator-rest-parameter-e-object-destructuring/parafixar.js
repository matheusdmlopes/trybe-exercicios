// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Manga', 'Uva Niagara'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Suco de Laranja', 'Melancia', 'Banana'];

const fruitSalad = (fruit, additional) => {
    const saladaDeFruta = [...fruit, ...additional]
    return saladaDeFruta
};

console.log(fruitSalad(specialFruit, additionalItens));