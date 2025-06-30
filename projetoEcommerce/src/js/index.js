/*Passo a passo para o projeto na parte do JavaScript

O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados

OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas

passo 1 - pegar o botao de aplicar filtros do HTML e mandar pro JS

passo 2 - escutar o clique no botão de aplicar filtros

passo 3 - pegar os valores dos campos de categoria e preço

passo 4 - para cada produto, verificar se ela deve ser mostrada ou escondida */

// passo 1 - pegar o botão do html e colocar no js

const botaoFiltrar = document.querySelector('.btn-filtrar');

//passo 2 - escutar o clique no botão de aplicar filtros
botaoFiltrar.addEventListener('click', function(){
    console.log('clicou no botão filtrar');
   // passo 3 - pegar os valores dos campos de categoria e preço
   
   const categoriaSelecionada = document.querySelector('#categoria').value;
    
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    
//passo 4 - para cada produto, verificar se ela deve ser mostrada ou escondida 
const produtos = document.querySelectorAll('.produto');

produtos.forEach(function (produto) {
    const categoriaProduto = produto.dataset.categoria;
    const preco = produto.dataset.preco;
    let mostrarProduto = true;
    console.log('A categoria selecionada foi:', categoriaSelecionada)

    const temFiltroDeCategoria  == categoriaSelecionada !== '';
   
    const ProdutoNaoCompativelComFiltroDeCategoria =
    categoriaSelecionada.toLowerCase() !==
    categoriaProduto.toLowerCase();

    if(temFiltroDeCategoria && 
        ProdutoNaoCompativelComFiltroDeCategoria) {
        mostrarProduto = false;
    }

    const temFiltroDeCategoria = precoMaximoSelecionado;
    const ProdutoNaoCompativelComFiltroDeCategoria = parseFloat (preco) > parseFloat(precoMaximoSelecionado);
if(temFiltroDeCategoria && ProdutoNaoCompativelComFiltroDeCategoria){
    mostrarProduto = false;
}

    if(mostrarProduto){
        produto.classList.add('mostrar');
        produto.classList.remove('esconder');
    }else{
        produto.classList.remove('mostrar');
        produto.classList.add('esconder');
        
}
});
});




