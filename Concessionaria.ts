import Carro from './Carro'
import { ConcessionariaInterface } from './ConcessionariaInterface'
export default class Concessionaria implements ConcessionariaInterface{
    private endereco!: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.listaDeCarros = listaDeCarros
        this.endereco = endereco
    }
    
    public fornecerEndereco(): string {
        return this.endereco
    }

    public listarCarros(): Array<Carro> {
        return this.listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string {
        return 'de segunda a sexta da 8h as 18h e sábados das 8h as 13h'
    }
}