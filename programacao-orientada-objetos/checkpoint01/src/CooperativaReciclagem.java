import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;

public class CooperativaReciclagem {
    protected String nome;
    private String cnpj;
    private String localidade;
    protected int qtdCooperados;
    private double valorTotalMensal = 0;

    public CooperativaReciclagem(String nome, String cnpj, String localidade) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.localidade = localidade;
    }

    //métodos

    protected boolean venderMaterialReciclavel(CompradorReciclaveis comprador, MaterialReciclavel material, double qtdKg){
        if(comprador.material == material){
            System.out.println("A venda pode ser efetuada com sucesso pois a empresa "
                    + comprador.nome + " efetua a compra de materias do tipo " +
                    material.nome + ". Valor pago pelo kg deste material: R$" + material.valorKg);
            double valorArrecadado = material.valorKg * qtdKg;
            System.out.println("Total em conta antes da venda: R$" + getValorTotalMensal());
            System.out.println("Total arrecadado com a venda: R$"+ valorArrecadado);
            this.setValorTotalMensal(this.getValorTotalMensal() + valorArrecadado); //atualização automática do saldo da cooperativa
            System.out.println("Total em conta depois da venda: R$" + getValorTotalMensal());
            return true;
        } else {
            System.out.println("A venda não pode ser efetuada pois a empresa "
                    + comprador.nome + " não efetua a compra de materias do tipo " +
                    material.nome + ".");
            return false;
        }
    }

    protected double calcDivisaoLucrosCooperativa(){
        double divisaoBonusMensal = (getValorTotalMensal()/getQtdCooperados());
        BigDecimal bd = new BigDecimal(divisaoBonusMensal).setScale(1, RoundingMode.HALF_EVEN); //para arredondar número decimal (1 casa)
        return bd.doubleValue(); //para retornar valor do tipo double
    }

    //setters e getters
    public void setValorTotalMensal(double valorTotalMensal) {
        this.valorTotalMensal = valorTotalMensal;
    }

    public double getValorTotalMensal() {
        return valorTotalMensal;
    }

    public int getQtdCooperados() {
        return qtdCooperados;
    }
}