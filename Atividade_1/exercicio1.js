//Uma fabrica deseja calcular sua producao diaria. O programa deve solicitar onome do produto, a quantidade produzida por hora ea quantidade de horas trabalhadas. Ao final, deve calcular e exibir a producao total.
const entrada = require('readline-sync');

const produto = entrada.question("qual o nome do produto: ");
const qtdPorHora = entrada.questionInt("Quantas pecas sao produzidas por hora? ");
const horas = entrada.question