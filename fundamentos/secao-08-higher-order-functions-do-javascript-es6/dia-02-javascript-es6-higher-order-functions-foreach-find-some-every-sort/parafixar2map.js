const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const montarLista = (produtos, preços) => produtos.map((element, index) => (
    { [element]: preços[index] }
))



console.log(montarLista(products, prices))