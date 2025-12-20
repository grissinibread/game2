"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.getWords = function () {
        return this._words;
    };
    Game.putSomethingIntoThisArray = function (userInput) {
        this._words.push(userInput);
    };
    Game.getBumOfWords = function () {
        return this.numOfWords;
    };
    Game.setBumofWords = function (bumOfWords) {
        this.numOfWords = bumOfWords;
    };
    Game.numOfWords = 3;
    Game._words = [];
    return Game;
}());
exports.Game = Game;
