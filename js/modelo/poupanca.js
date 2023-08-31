class poupanca extends conta {
    constructor(numero, saldo, aniversario) {
        super(numero, saldo);
        this.aniversario = aniversario;
    }

    creditar(valor) {
        super.creditar(valor * 1.1);
    }

    bonificar() {
        //Lógica que testa se o dia de hoje é igual ao dia do nascimento
        this.saldo *= 1.2;
    }
}