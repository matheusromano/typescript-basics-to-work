import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import Carro  from './Carro'


/*------------- CRIAR CARROS ------------- */

let carroA = new Carro("Celta", 2)
let carroB = new Carro("Corsa", 4)
let carroC = new Carro("Uno", 2)

/*------------- MONTAR A LISTA DE CARROS ------------- */

let listaDeCarros: Carro[] = [carroA, carroB, carroC]
let concessionaria = new Concessionaria('Av Toaldo Tulio', listaDeCarros)

/*------------- EXIBIR A LISTA DE CARROS DA CONCESSIONÁRIA ------------- */

//console.log(concessionaria.listarCarros());

/*------------- EXIBIR A LISTA DE CARROS DA CONCESSIONÁRIA ------------- */
let cliente = new Pessoa('Matheus', 'Corsa')
// console.log(cliente.dizerCarroPreferido());

// "map" percorre o array
concessionaria.listarCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.compraCarro(carro)
    }
    
})

console.log(cliente.dizerCarroQueTem());












