"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_js_1 = require("./Player.js");
var player;
beforeEach(function () {
    player = new Player_js_1.Player();
});
test('the storage is empty when a player object is created', function () {
    expect(player.getWords().length).toBe(0);
});
test('the storage is not empty when a player adds a word', function () {
    player.addWord("word");
    expect(player.getWords().length).toBeGreaterThan(0);
});
