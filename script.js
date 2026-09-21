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
    const Indexitem = mercadoria.findIndex(a => a.id == idProcurado)

    if (Indexitem != -1){
        alunos.splice(Indexitem, 1)
        alert("Item removido com sucesso")
    } else{
        alert("Item não encontrado.")
    }
}

function {}