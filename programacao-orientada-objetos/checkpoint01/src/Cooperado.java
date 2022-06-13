import java.text.SimpleDateFormat;

public class Cooperado {
    protected String nome;
    protected String cpf;
    protected String telefone;
    private CooperativaReciclagem cooperativa;
    protected double salario;

    //construtor
    public Cooperado(String nome, String cpf, String telefone, CooperativaReciclagem cooperativa, double salario){
        cooperativa.qtdCooperados++;
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.salario = salario;
        this.cooperativa = cooperativa;
    }

    //métodos
    public double calcBonusMensalCooperado(){
        double salarioComBonus = this.salario + this.cooperativa.calcDivisaoLucrosCooperativa();
        return salarioComBonus;
    }
}
