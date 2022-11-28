const { encode, decode } = require('./exercicio3.js')

describe('Fazendo os testes', () => {
    test('Teste se encode e decode são funções;', () => {
        expect(typeof decode).toBe('function')
        expect(typeof encode).toBe('function')
    })
    test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
        expect(encode('a,e,i,o,u')).toBe('1,2,3,4,5')
    })
    test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
        expect(decode('1,2,3,4,5')).toBe('a,e,i,o,u')
    })
    test('Teste se as demais letras/números não são convertidos para cada caso;', () => {
        expect(encode('6,7,8,9,10')).not.toBe('a,e,i,o,u')
        expect(decode('b,c,x,y,z')).not.toBe('1,2,3,4,5')
    })
    test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('1,2,3,4,5').length).toBe(9)
        expect(decode('a,e,i,o,u')).toHaveLength(9)
    })
})