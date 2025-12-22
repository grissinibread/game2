"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.getNumOfWords = function () {
        return this.numOfWords;
    };
    Game.setNumOfWords = function (numOfWords) {
        this.numOfWords = numOfWords;
    };
    Game.numOfWords = 3;
    return Game;
}());
exports.Game = Game;
