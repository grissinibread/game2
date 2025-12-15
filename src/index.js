"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var readline = require("node:readline");
var rl = readline.createInterface({ input: process.stdin,
    output: process.stdout });
var index = 0;
var game = /** @class */ (function () {
    function game() {
        this.numOfWords = 3;
        this._words = [];
    }
    game.prototype.askWord = function () {
        var _this = this;
        if (index >= this.numOfWords) {
            rl.close();
            return;
        }
        rl.question("Word ".concat(index + 1, ": "), function (userInput) {
            _this._words.push(userInput);
            index++;
            _this.askWord(); // ask next word
        });
    };
    game.prototype.getWordsInArray = function () {
        return this._words.length;
    };
    return game;
}());
exports.game = game;