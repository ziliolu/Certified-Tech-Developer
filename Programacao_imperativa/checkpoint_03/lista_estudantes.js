let Aluno = require ('./objeto_aluno');

let aluno1 = new Aluno('Luiza', 1, [9, 7, 8]);
let aluno2 = new Aluno('Marcela', 3, [10, 6, 9]);
let aluno3 = new Aluno('Fernando', 1, [4, 8, 7]);

let estudantes = [aluno1, aluno2, aluno3];

module.exports = estudantes; 

// -- TESTES --
console.log(aluno1.faltas);
console.log(estudantes);
console.log(aluno3.calcularMedia());


