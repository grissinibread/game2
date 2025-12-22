"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player() {
        this.words = [];
    }
    Player.prototype.addWord = function (word) {
        this.words.push(word);
    };
    Player.prototype.getWords = function () {
        return this.words;
    };
    return Player;
}());
exports.Player = Player;
