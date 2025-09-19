let nomes = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];

console.log('Terceiro nome:', nomes[2]);

nomes.push('Fernanda');
nomes.unshift('Gabriel');

nomes.pop();
console.log('Array atualizado:', nomes);

const numeros = [2, 4, 6, 8];
const numerosDobrados = numeros.map(num => num * 2);
console.log('Números dobrados:', numerosDobrados);

const numeros2 = [1, 3, 5, 7, 9];
const maioresQueCinco = numeros2.filter(num => num > 5);
console.log('Números maiores que 5:', maioresQueCinco);