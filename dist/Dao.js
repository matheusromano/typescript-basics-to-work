"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (id) {
        console.log('logica de insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('logica de update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('logica de delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('logica de select');
        return Object();
    };
    // retorna um array de qualquer coisa
    Dao.prototype.selecionarTodos = function () {
        console.log('logica de listAll');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
