export default class Veiculo {
    // "!" evita o undefined
    protected modelo!: string
    protected velocidade: number = 0

    // recebo os parametos

    // metodos são implementados por meio de funcoes
    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    // o tipo de retorno deve se respeitado
    public velocidadeAtual(): number {
        return this.velocidade
    }

}