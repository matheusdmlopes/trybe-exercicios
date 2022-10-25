let statusCandidato = 'reprovada'

switch (statusCandidato) {
    case 'Aprovada':
        console.log ('Parabéns, você foi aprovado!')
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera')
        break;
    case 'Reprovada':
        console.log('Você foi reprovado')
        break;    
    default:
        console.log('Informação inválida!')
}