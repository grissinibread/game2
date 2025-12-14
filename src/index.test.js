"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var index_1 = require("./index");
var newGame;
beforeEach(function () {
    newGame = new index_1.game();
});
(0, globals_1.test)('empty array at the beginning of a game', function () {
    (0, globals_1.expect)(newGame.getWordsInArray()).toBe(0);
});
