import Veiculo from "./Veiculo"

export default class Carro extends Veiculo {
    // "!" evita o undefined
    
    private numeroDePortas!: number
    

    // recebo os parametos
    constructor(modelo: string, numeroDePortas: number){
        super()
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }
}

