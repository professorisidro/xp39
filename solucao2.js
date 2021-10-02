const listaProdutos = require('./lista')

console.log(listaProdutos);

function exercicio1(){

    var total=0;  // essa é a minha variável que vai acumular o total de produtos
    // quanto ela deve valer inicialmente? 0,pois antes de percorrer a lista, não 
    // tenho nenhum produto


    // como eu percorro uma lista?
    for(i=0; i<listaProdutos.length; i++){
        // o que eu faço a cada linha?
        let produto = listaProdutos[i];
        total = total + produto.qtdEstoque; // somo a esse total, a quantidade de produtos em estoque
    }
    // no final do algoritmo, exibo esse total, numa mensagem para o usuário
    console.log("Total de produtos em estoque = "+total);

}

function exercicio4(){
    // a idéia é muito similar ao exercício 1, porém eu tenho 1 condição antes de somar
    var total = 0;
    // percorro a lista, agora apenas acumulando ao total, aqueles produtos que estão marcados
    // com disponivel = sim E emDestaque = sim
    for (i=0; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];

        if (produto.emDestaque == "sim" && produto.disponivel == "sim"){
            total += produto.qtdEstoque;
        }
    }
    console.log("Total de produtos em estoque disponíveis e em destaque = "+total);

}

function exercicio6(){
    // a regra geral para saber se um produto é o mais caro ou o mais barato sempre é
    // ter um valor de referência - em geral o 1o valor

    let produtoMaisCaro = listaProdutos[0];
    for (i=1; i<listaProdutos.length; i++){
        // aqui preciso comparar o preço de cada produto da lista com este produto de referência
        // se eu achar um produto + caro, o que eu devo fazer? Tornar este produto a nova referência
        let produto = listaProdutos[i];
        if (produto.preco > produtoMaisCaro.preco){
            produtoMaisCaro = produto;
        }
    }
    console.log("Produto mais caro da empresa é o  "+produtoMaisCaro.descricao+ " cujo preço é R$ "+produtoMaisCaro.preco);
    

}

function exercicio9(){
    // bastante similar ao exercício 6, porém temos que considerar os produtos que POSSUEM ESTOQUE, senão
    // ficamos reféns de só exibir produtos sem estoque
    let estoqueMaisBarato = listaProdutos[0];
    for (i=1; i<listaProdutos.length; i++){
        let produto = listaProdutos[i];
        // aqui eu tenho 2 itens para definir: preço * qtdEstoque, porém, antes:
        if (produto.qtdEstoque > 0){
            if (produto.preco * produto.qtdEstoque < estoqueMaisBarato.preco * estoqueMaisBarato.qtdEstoque){
                estoqueMaisBarato = produto;
            }
        }        
    }
    console.log("O estoque mais barato é do produto "+estoqueMaisBarato.descricao + 
                " cujo valor está estimado em R$ "+(estoqueMaisBarato.preco*estoqueMaisBarato.qtdEstoque));


}

function exercicio11(){

}

function exercicio13(){

}

