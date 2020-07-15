//Passagem por refêrencia
const a = { name: "Teste" };
console.log(a);

const b = a;
console.log(b);

b.name = "Opa";
console.log(a);
console.log(b);

//Tipos primitivos
//Passagem por valor
let c = 3;
let d = c;
d++;
console.log(c);
console.log(d);

////NULL & Undefined
let valor;
console.log(valor);
//console.log(valor2); is not defined

valor = null; //ausência de valor
console.log(valor);
//console.log(valor.toString()); //ERRO

const produto = {};
console.log(produto.preco);
console.log(produto);
produto.preco = 3.5;
console.log(produto);
console.log(produto.preco);

produto.preco = undefined; //evite atribuir undefined
console.log(!!produto.preco);
console.log(produto);

//delete produto.preco;
console.log(produto);

produto.preco = null;
console.log(!!produto.preco);
console.log(produto);
