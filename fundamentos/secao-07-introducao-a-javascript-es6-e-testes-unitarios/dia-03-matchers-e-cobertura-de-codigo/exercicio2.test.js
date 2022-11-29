const { info, printMessage } = require('./exercicio2.js')

describe('Fazendo os testes', () => {
    test('Considerando a função printMessage, crie um teste em Jest para garantir que o objeto passado como parâmetro possui a propriedade personagem.', () => {
        const functionParameter = printMessage(teste)

        expect(functionParameter).toContain('personagem')
    })
})