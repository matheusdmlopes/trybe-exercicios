const sum = requires('./sum.js');

describe('testando os bagulhos', () => {
    test('Teste se o retorno de sum(4, 5) é 9;', () => {
        expect(sum(4, 5)).toBe(9)
    })
})