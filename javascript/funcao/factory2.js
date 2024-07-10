function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notbook', 2500))
console.log(criarProduto('Iphone 14 Pro Max', 15000))