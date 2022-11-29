const sum = require('./sum.js');

describe('testando os bagulhos', () => {
    test('Teste se o retorno de sum(4, 5) é 9;', () => {
        expect(sum(4, 5)).toBe(9)
    })
    test('Teste se o retorno de sum(0, 0) é 0.', () => {
        expect(sum(0, 0)).toBe(0)
    })
    test('Teste se a função sum lança um erro quando os parâmetros são number 4 e string', () => {
        // expect(sum(4, '5')).toThrowError(Error)
        expect(() => sum(4, '5')).toThrow(Error)
    })
    test('Teste se a mensagem de erro é parameters must be numbers quando realizar a chamada sum(4, string 5);', () => {
        // expect(sum(4, '5')).toThrow(new Error('parameters must be numbers'))
        expect(() => sum(4, '5')).toThrow(new Error('parameters must be numbers'))
    })
})