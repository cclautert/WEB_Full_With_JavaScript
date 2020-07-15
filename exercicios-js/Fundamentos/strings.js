const escola = "Cod3r";
console.log(escola.charAt(4));
console.log(escola.charAt(5)); //Não estoura Erro
console.log(escola.charCodeAt(3)); // Valor na tabela ASCII
console.log(escola.indexOf("3"));

//Substring
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!"));
console.log("Escola " + escola + "!");
console.log(escola.replace(3, "e"));
console.log(escola.replace(/\d/, "e")); //REGEX

console.log("Ana,Maria,Pedro".split(","));
console.log("Ana,Maria,Pedro".split(/,/)); //REGEX
