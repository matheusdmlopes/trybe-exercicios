function hydrate(string) {
    const splitString = string.split('')
    let glassOfWater = 0;

    for (let index = 0; index < splitString.length; index += 1) {
        if (parseInt(splitString[index])) {
            glassOfWater += parseInt(splitString[index])
        }
    }
    let glass = 'copo'

    if (glassOfWater > 1) glass = 'copos'

    return `${glassOfWater} ${glass} de água`
}

module.exports = hydrate;