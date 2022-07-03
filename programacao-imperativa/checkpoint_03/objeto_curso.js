
let estudantes = require ('./lista_estudantes.js');
let Aluno = require ('./objeto_aluno.js');

let curso = {
    nomeCurso: 'Certified Tech Developer',
    notaAprovacao: 7,
    faltasMax: 3,
    estudantes,
    adicionarAluno: function (nome, faltas, notas) {
        estudantes.push(new Aluno(nome, faltas, notas));
        return estudantes;
    },
    aprovacao: function (aluno) {

        if ((aluno.calcularMedia() >= this.notaAprovacao) && (aluno.faltas < this.faltasMax)) {
            return true;
            //return ('O aluno(a) ' + aluno.nome + ' foi aprovado no curso ' + this.nomeCurso);
        } else if ((aluno.faltas = this.faltasMax) && (aluno.calcularMedia() >= (this.notaAprovacao + ((this.notaAprovacao) / 10)))) {
            return true;
            //return ('O aluno(a) ' + aluno.nome + ' foi aprovado no curso ' + this.nomeCurso);
        } else {
            return false;
            //return ('O aluno(a) ' + aluno.nome + ' foi reprovado no curso ' + this.nomeCurso);
        };
    },

    aprovados: function (array) {
        let resultados = [];
        for (i = 0; i < array.length; i++) {
            let media = this.estudantes[i].calcularMedia()
            if ((media >= this.notaAprovacao) && (array[i].faltas <= this.faltasMax)){
                resultados.push(true);
                
            }else{
                resultados.push(false);
            }          
    }
    return resultados;
}
}

module.exports = curso;

// -- TESTES --
console.log(curso.adicionarAluno('Felipe', 5, [9,6,7]));
console.log(curso.aprovados(estudantes));
console.log(curso.nomeCurso);
