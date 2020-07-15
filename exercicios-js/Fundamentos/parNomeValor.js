const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaa"; //contexto léxico 2
  return saudacao;
}

//Objetos são grupos aninhados de pares key/valor
const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Lauro Linhares",
    numer: 2123,
  },
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
