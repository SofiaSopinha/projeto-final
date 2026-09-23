const mercadoria = []

function cadastrarProduto(){
    const nome = prompt("Insira o nome do produto")
    if(nome === null || nome === ""){
        alert("O produto não pôde ser cadastrado. O nome do produto é obrigatório")
        return}

    const marca = prompt("Insira a marca do produto")
    if(marca === null || marca === ""){
        alert("O produto não pôde ser cadastrado. A marca do produto é obrigatório")
        return
    }
    
    const produto = {
        id: mercadoria.length + 1,
        nome: nome,
        marca: marca
    }
        mercadoria.push(produto)
}

function DelporID(){
    if(mercadoria.length == 0){
    alert("Não há produtos cadastrados para que possa deletá-los.")
    return}
    const idProcurado = prompt("Qual é o id do produto que você quer remover?")
    const Indexproduto = mercadoria.findIndex(a => a.id == idProcurado)

    if (Indexproduto != -1){
        mercadoria.splice(Indexproduto, 1)
        alert("Produto removido com sucesso")
    } else{
        alert("Produto não encontrado.")
    }
  
}

function mostrarProdutos(){
    if (mercadoria.length > 0) {
        let produtos = `=== PRODUTOS ===\n`
        for (let i = 0; i < mercadoria.length; i++) {
            produtos = produtos + `id: ${mercadoria[i].id}\n`
            produtos = produtos + `nome: ${mercadoria[i].nome}\n` 
            produtos = produtos + `marca: ${mercadoria[i].marca}\n`
            produtos = produtos + `===============================\n`
        }
        alert(produtos)
    } else{
        alert("Nenhum produto cadastrado")
    }   
}

function buscarNome(){

    const nomeProcurado = prompt("Digite o nome do produto que você está procurando: ")
    if(nomeProcurado === null || nomeProcurado === ""){
        alert("O produto não pôde ser identificado. Por favor, insira um nome válido")
        return
    }
    const nomeEncontrado = mercadoria.find(produto => produto.nome.toLowerCase().trim() === nomeProcurado.toLowerCase().trim())

    if(nomeEncontrado){
        alert(`Produto identificado: \n
            id: ${nomeEncontrado.id}\n
            nome: ${nomeEncontrado.nome}\n
            marca: ${nomeEncontrado.marca}`)
    }
    else{
        alert("Produto não encontrado.")
    }
}


