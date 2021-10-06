import Carro from './Carro'
export default class Pessoa {

    private carroPreferido!: string
    private nome!: string
    private carro!: Carro

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
        
        
    }

    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    public dizerCarroQueTem(): any {
        return this.carro
    }

    public compraCarro(carro: Carro): void {
        this.carro = carro
    }
}
