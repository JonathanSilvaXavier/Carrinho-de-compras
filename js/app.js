let carrinhoTotal;
limpar ();

function adicionar() {
    let produto = document.getElementById ('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById ('quantidade').value;
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById ('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`
    carrinhoTotal = carrinhoTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${carrinhoTotal}`;
    document.getElementById ('quantidade').value = 0;
}

function limpar() {
    carrinhoTotal = 0;
    document.getElementById ('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}