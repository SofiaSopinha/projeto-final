const mercadoria = []

function cadastrarProduto(){
    const produto = {
        id: mercadoria.length + 1,
        nome: prompt("Insira o nome do produto"),
        marca: prompt("Insira a marca do produto")
    }
    mercadoria.push(produto)
}

function DelporID(){
    const idProcurado = prompt("Qual é o id do produto que você quer remover?")
    const Indexproduto = mercadoria.findIndex(a => a.id == idProcurado)

    if (Indexproduto != -1){
        alunos.splice(Indexproduto, 1)
        alert("Produto removido com sucesso")
    } else{
        alert("Produto não encontrado.")
    }
}

function mostrarProdutos(){
    if (mercadoria.length > 0) {
        for (let i = 0; i < mercadoria.length; i++) {
            alert(`=== PRODUTOS ===\n
                id: ${mercadorias[i].id}\n
                nome: ${mercadorias[i].nome}\n
                marca: ${mercadorias[i].marca}\n
                ===============================\n`) }
    } else{
        alert("Nenhum produto cadastrado")
    }
    
}