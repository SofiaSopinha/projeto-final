const mercadoria = []
let proxID = 1

function cadastrarProduto(){
    const nome = prompt("Insira o nome do produto")
    if(nome === null || nome.trim() === ""){
        alert("O produto não pôde ser cadastrado. O nome do produto é obrigatório.")
        return}

    const marca = prompt("Insira a marca do produto")
    if(marca === null || marca.trim() === ""){
        alert("O produto não pôde ser cadastrado. A marca do produto é obrigatória.")
        return
    }
    
    const produto = {
        id: proxID,
        nome: nome,
        marca: marca
    }
        proxID++
        mercadoria.push(produto)
}

function DelporID(){
    if(mercadoria.length == 0){
    alert("Não há produtos cadastrados para que possa removê-los.")
    return}
    const idProcurado = prompt("Qual é o id do produto que você quer remover?")
    const Indexproduto = mercadoria.findIndex(a => a.id == idProcurado)

    if (Indexproduto != -1){
        mercadoria.splice(Indexproduto, 1)
        alert("Produto removido com sucesso.")
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
        alert("Nenhum produto cadastrado.")
    }   
}

function buscarNome(){

    const nomeProcurado = prompt("Digite o nome do produto que você está procurando: ")
    if(nomeProcurado === null || nomeProcurado.trim() === ""){
        alert("O produto não pôde ser identificado. Por favor, insira um nome válido.")
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

function removerUltimo() {
    if(mercadoria.length > 0){
    mercadoria.pop()
    alert("Último produto removido com sucesso.")
    } else{
        alert("Não há produtos cadastrados para que possa removê-los.")
    }
}

function removerTudo(){
    const confirmado = confirm("Você tem certeza de quer remover todos os produtos? Não é possível desfazer essa ação.")

    if(confirmado == true){
        mercadoria.length = 0
        alert("Todos os produtos removidos com sucesso.")
    }
    else{
        alert("Ação cancelada.")
    }
    
}

function qtdProdutos(){
    const total = mercadoria.length
    alert(`Há ${total} produtos cadastrados no total`)
}