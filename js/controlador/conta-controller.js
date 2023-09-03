class ContaController {
    constructor() {
        this.elementoNumero = document.querySelector('#numero');
        this.elementoSaldo = document.querySelector('#saldo');
        this.aniversario = document.querySelector('#aniversario');
        this.tipoConta = document.querySelector('#seletorTipos');
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        if(this.tipoConta.value == 'Conta Regular') {
            const conta = new Conta(this.elementoNumero.value,
                Number(this.elementoSaldo.value));
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
            console.log('criou tipo 1');
        }
        else if(this.tipoConta.value == 'Conta Bonificada') {
            const conta = new ContaBonificada(this.elementoNumero.value,
                Number(this.elementoSaldo.value));
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
            console.log('criou tipo 2');
        }
        else if (this.tipoConta.value == 'Conta Poupança') {
            const conta = new poupanca(this.elementoNumero.value,
                Number(this.elementoSaldo.value), this.aniversario.value);
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
                console.log('criou tipo 3');

        }
        else {
            window.alert('Tipo de conta inválda ou não selecionada.')
        }
        
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
