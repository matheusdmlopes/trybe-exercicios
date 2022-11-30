const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva')
    }
    return employees;
};

const gerarEmail = (nomeCompleto) => {
    const mudarFormato = nomeCompleto.toLowerCase().split(' ').join('_')
    return {
        nome: nomeCompleto, email: `${mudarFormato}@trybe.com`
    }
}

console.log(newEmployees(gerarEmail));

