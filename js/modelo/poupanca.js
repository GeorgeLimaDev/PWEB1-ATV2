class poupanca extends Conta {
    constructor(numero, saldo, aniversario) {
        super(numero, saldo);
        this._aniversario = aniversario;
    }

    creditar(valor) {
        super.creditar(valor * 1.1);
    }

    bonificar() {
        //Lógica que testa se o dia de hoje é igual ao dia do nascimento
        this.saldo *= 1.2;
    }

    get aniversario() {
        return this._aniversario;
    }

    set aniversario(novaData) {
        this._aniversario = novaData;
    }
}