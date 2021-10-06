"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    Pessoa.prototype.compraCarro = function (carro) {
        this.carro = carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;
