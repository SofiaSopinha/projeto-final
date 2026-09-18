const mercadoria = []

function cadastrarProduto(){
    const produto = {
        id: mercadoria.length + 1,
        nome: prompt("Insira o nome do produto"),
        marca: prompt("Insira a marca do produto")
    }
    mercadoria.push(produto)
}