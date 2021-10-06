"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.listaDeCarros = listaDeCarros;
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.listarCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'de segunda a sexta da 8h as 18h e sábados das 8h as 13h';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
