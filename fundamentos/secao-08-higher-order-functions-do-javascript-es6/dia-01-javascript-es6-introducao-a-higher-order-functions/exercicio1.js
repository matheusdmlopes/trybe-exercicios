// const newEmployees = (callback) => {
//     const employees = {
//         id1: callback('Pedro Guerra'),
//         id2: callback('Luiza Drumond'),
//         id3: callback('Carla Paiva')
//     }
//     return employees;
// };

// const gerarEmail = (nomeCompleto) => {
//     const mudarFormato = nomeCompleto.toLowerCase().split(' ').join('_')
//     return {
//         nome: nomeCompleto, email: `${mudarFormato}@trybe.com`
//     }
// }

// console.log(newEmployees(gerarEmail));



const newEmployees = () => {
    const employees = {
        id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};
