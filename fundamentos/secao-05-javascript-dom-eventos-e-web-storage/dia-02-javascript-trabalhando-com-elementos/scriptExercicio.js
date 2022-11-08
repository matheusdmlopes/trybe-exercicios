const paiDeTodos = document.getElementById("paiDoPai")

const todosOsFilhos = paiDeTodos.childNodes


for (let index = 0; index < todosOsFilhos.length; index += 1) {
    let filhoAtual = todosOsFilhos[index]
    if (filhoAtual.id !== 'elementoOndeVoceEsta' && filhoAtual.id !== 'pai' && filhoAtual.id !== 'primeroFilhoDoFilho') {
        filhoAtual.remove();
    }
}
