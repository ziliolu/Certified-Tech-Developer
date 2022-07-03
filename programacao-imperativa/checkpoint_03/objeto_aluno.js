function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function () {
        let media = (this.notas[0] + this.notas[1] + this.notas[2]) / 3;
        return media;
    }
    this.aumentaFaltas = function () {
        return (this.faltas + 1)

    }
}
module.exports = Aluno;