"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.getNumOfWords = function () {
        return this.numOfWords;
    };
    Game.setNumOfWords = function (bumOfWords) {
        this.numOfWords = bumOfWords;
    };
    Game.numOfWords = 3;
    return Game;
}());
exports.Game = Game;
