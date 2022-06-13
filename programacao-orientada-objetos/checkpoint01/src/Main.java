public class Main {
    public static void main(String[] args) {

        // ======= INSTANCIAÇÃO DE OBJETOS =======

        //criacao de cooperativas OK
        CooperativaReciclagem EcoMundo = new CooperativaReciclagem("EcoMundo", "09.332.304/0001-00", "Porto Alegre-RS");
        CooperativaReciclagem CopResiduos = new CooperativaReciclagem("CopResiduos", "09.431.604/0001-00", "São Paulo-SP");
        CooperativaReciclagem SolarReciclagem = new CooperativaReciclagem("SolarReciclagem", "09.732.504/0001-00", "Belo Horizonte-MG");
        CooperativaReciclagem Reconecta = new CooperativaReciclagem("Reconecta", "91.434.184/0001-53", "Caxias do Sul-RS");

        //adicionando rendimentos mensais OK
        EcoMundo.setValorTotalMensal(2000.0);
        CopResiduos.setValorTotalMensal(1000D);

        //criacao de cooperados Cooperativa EcoMundo OK
        Cooperado cooperado1 = new Cooperado("Marcos de Oliveira", "05456734579","54997583456", EcoMundo, 1200 );
        Cooperado cooperado2 = new Cooperado("Maria Conceição", "05456734699","54997236451", EcoMundo, 1200);
        Cooperado cooperado3 = new Cooperado("José da Silva", "05456722460","54987234568", EcoMundo, 1200);

        //criacao de cooperados Cooperativa CopResiduos OK
        Cooperado cooperado4 = new Cooperado("Evandro José", "05456722550","54987236538", CopResiduos, 1200);
        Cooperado cooperado5 = new Cooperado("Maria Eduarda", "05456333559","54988836539", CopResiduos, 1200);

        //criacao de cooperados Cooperativa SolarReciclagem OK
        Cooperado cooperado6 = new Cooperado("Rafael Moraes", "05456722550","54987236538", SolarReciclagem, 1200);
        Cooperado cooperado7 = new Cooperado("Joana de Oliveira Silva", "05456333397","54988833456", SolarReciclagem, 1200);

        //criacao de materiais recicláveis
        MaterialReciclavel lata = new MaterialReciclavel("Alumínio", "Lata", 5.80);
        MaterialReciclavel petAzul = new MaterialReciclavel("Plástico", "PET azul", 0.80);
        MaterialReciclavel petLaranja = new MaterialReciclavel("Plástico", "PET laranja", 0.20);
        MaterialReciclavel sucataMista = new MaterialReciclavel("Ferro", "Sucata mista", 1.0);
        MaterialReciclavel papelBranco = new MaterialReciclavel("Papel", "Papel Branco", 0.65);

        //criação de empresas compradoras de recicláveis
        CompradorReciclaveis ReciclaDF = new CompradorReciclaveis("ReciclaDF", "68.386.969/0001-86", lata);
        CompradorReciclaveis NaturaReciclaveis = new CompradorReciclaveis("NaturaReciclaveis", "81.705.460/0001-17", papelBranco);

        // ======= TESTES =======

        //testes quantidade de cooperados OK
        System.out.println("===== TESTE QUANTIDADE DE COOPERADOS ====");
        System.out.println("Qtd cooperados " + EcoMundo.nome + ": " + EcoMundo.qtdCooperados);
        System.out.println("Qtd cooperados " + CopResiduos.nome + ": " + CopResiduos.qtdCooperados);
        System.out.println("Qtd cooperados " + SolarReciclagem.nome + ": " + SolarReciclagem.qtdCooperados);
        System.out.println("Qtd cooperados " + Reconecta.nome + ": " + Reconecta.qtdCooperados);

        //testes divisao de lucros OK
        System.out.println("===== TESTE DIVISAO DE LUCROS ====");
        System.out.println("Valor total cooperativa: "+EcoMundo.getValorTotalMensal());
        System.out.println("Numero de cooperados na cooperativa: "+ EcoMundo.qtdCooperados);
        System.out.println("Divisao do lucro pelo numero de cooperados: "+ EcoMundo.calcDivisaoLucrosCooperativa());
        System.out.println("Salario atual do cooperado " + cooperado1.nome + ": "+ cooperado1.salario);
        System.out.println("Salario apos adicao do bonus: "+cooperado1.calcBonusMensalCooperado());

        System.out.println("--- adicionando novo cooperado ---");

        Cooperado cooperado8 = new Cooperado("João da Silva", "0540683459", "54778289302", EcoMundo, 1200); //adicao de novo cooperado em EcoMundo
        System.out.println("Valor total cooperativa: "+EcoMundo.getValorTotalMensal());
        System.out.println("Numero de cooperados na cooperativa: "+ EcoMundo.qtdCooperados);
        System.out.println("Divisao do lucro pelo numero de cooperados: "+ EcoMundo.calcDivisaoLucrosCooperativa());
        System.out.println("Salario atual do cooperado " + cooperado1.nome + ": "+ cooperado1.salario);
        System.out.println("Salario apos adicao do bonus: "+cooperado1.calcBonusMensalCooperado());

        //teste de compra e venda de materiais recicláveis OK
        System.out.println("===== TESTE DE COMPRA E VENDA DE MATERIAIS ====");
        Reconecta.setValorTotalMensal(1000);
        Reconecta.venderMaterialReciclavel(NaturaReciclaveis, papelBranco, 10.0);

    }
}
