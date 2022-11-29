const { info, printMessage } = require('./exercicio2.js')

describe('Fazendo os testes', () => {
    test('Considerando a função printMessage, crie um teste em Jest para garantir que o objeto passado como parâmetro possui a propriedade personagem.', () => {
        expect(info).toHaveProperty('personagem')
    })
    test('Verifique se a resposta contém a informação Boas vindas,, antes de chamar o nome da personagem; e verifique se a resposta contém o nome correto da personagem. ', () => {
        expect(printMessage(info)).toMatch('Boas vindas')
        expect(printMessage(info)).toMatch('Margarida')
    })
})