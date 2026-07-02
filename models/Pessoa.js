class Pessoa {
    constructor(nome, dataNascimento) {
        this.nome = nome;
        this.dataNascimento = new Date(dataNascimento);
    }

    calcularIdade() {
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
        const diferencaMes = hoje.getMonth() - this.dataNascimento.getMonth();
        const aniversarioAindaNaoChagou = 
        diferencaMes < 0 || 
(diferencaMes === 0 && hoje.getDate() < this.dataNascimento.getDate());
        if (aniversarioAindaNaoChagou) {
            idade--;
        }
        return idade;
    }
    toJSON() {
        return {
          nome: this.nome,
          dataNascimento: this.dataNascimento.toISOString().split('T')[0],
          idade: this.calcularIdade(),
        };
    }  
}
module.exports = Pessoa;  