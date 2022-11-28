const myFizzBuzz = require('./exercicio2.js')

describe('Testando os bagulhos', () => {
    test('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    test('Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.', () => {

    })
})