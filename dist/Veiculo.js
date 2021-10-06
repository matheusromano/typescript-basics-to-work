"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.velocidade = 0;
    }
    // recebo os parametos
    // metodos são implementados por meio de funcoes
    Veiculo.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    // o tipo de retorno deve se respeitado
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Veiculo;
}());
exports.default = Veiculo;
