function techList(array, nome) {
    if (array.length === 0) return 'Vazio!'

    const organizarArray = array.sort()
    const vazia = []
    for (let index = 0; index < organizarArray.length; index += 1) {
        vazia.push({
            tech: organizarArray[index],
            name: nome
        })
    }
    return vazia;
}
;

module.exports = techList;