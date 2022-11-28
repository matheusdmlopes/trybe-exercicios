const myFizzBuzz = require('./exercicio2.js')

describe('Testando os bagulhos', () => {
    test('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    test('Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })
    test('Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(25)).toBe('buzz')
    })
    test('Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz(37)).toBe(37)
    })
    test('Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.', () => {
        expect(myFizzBuzz('boa tarde')).toBe(false)
    })
})