"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var readline = require("node:readline");
var Game_js_1 = require("./Game.js");
var rl = readline.createInterface({ input: process.stdin,
    output: process.stdout });
var Player = /** @class */ (function () {
    function Player() {
        this.index = 0;
    }
    Player.prototype.applesauce = function () {
        var _this = this;
        if (this.index >= Game_js_1.Game.getBumOfWords()) {
            rl.close();
            return;
        }
        rl.question("Word ".concat(this.index + 1, ": "), function (userInput) {
            Game_js_1.Game.putSomethingIntoThisArray(userInput);
            _this.index++;
            _this.applesauce(); // ask next word
        });
    };
    return Player;
}());
exports.Player = Player;
