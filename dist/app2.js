"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Carro_1 = __importDefault(require("./Carro"));
/*------------- CRIAR CARROS ------------- */
var carroA = new Carro_1.default("Celta", 2);
var carroB = new Carro_1.default("Corsa", 4);
var carroC = new Carro_1.default("Uno", 2);
/*------------- MONTAR A LISTA DE CARROS ------------- */
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Toaldo Tulio', listaDeCarros);
/*------------- EXIBIR A LISTA DE CARROS DA CONCESSIONÁRIA ------------- */
//console.log(concessionaria.listarCarros());
/*------------- EXIBIR A LISTA DE CARROS DA CONCESSIONÁRIA ------------- */
var cliente = new Pessoa_1.default('Matheus', 'Corsa');
// console.log(cliente.dizerCarroPreferido());
// "map" percorre o array
concessionaria.listarCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //comprar o carro
        cliente.compraCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
