let frutas = ['Maçã', 'Banana', 'Pera', 'Kiwi', 'Uva'];
console.log(frutas);
console.log(frutas.length);

let primeiroTermo = frutas[0];
let ultimoTermo = frutas[frutas.length - 1];
console.log(primeiroTermo);
console.log(ultimoTermo);

frutas.push('Manga'); // adiciona um elemento
console.log(frutas);
frutas.pop(); //remove o último termo
console.log(frutas);

// .shift remove item no inicio da lista o unshift adiciona um elemento no inicio
// indexOf serve para procurar o indice de um item na Array
// splice remove um item pela posição do indice


let nomes = ['João', 'Maria', 'Heitor', 'Gabriel'];
console.log(nomes.length);
nomes.push('Joana');
console.log(nomes);
nomes.pop();
console.log(nomes);
console.log(nomes.indexOf('Heitor'));