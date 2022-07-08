// Array no formato de JSON
const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
];

/* *** Retornar um array apenas com os preços *** */

// Transformando o JSON em Objeto
const paraObjeto =  json => JSON.parse(json); 
// Método para retornar somente o preço
const apenasPreco = produto => produto.preco;

// Onde armazenamos o Objeto e extraímos o preço
const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);