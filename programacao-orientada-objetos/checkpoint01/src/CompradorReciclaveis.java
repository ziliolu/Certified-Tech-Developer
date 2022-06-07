public class CompradorReciclaveis {
    protected String nome;
    private String cnpj;
    protected MaterialReciclavel material;

    public CompradorReciclaveis(String nome, String cnpj, MaterialReciclavel material) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.material = material;
    }
}
