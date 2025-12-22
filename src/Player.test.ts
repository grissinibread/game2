import {Player} from "./Player.js";

let player: Player;

beforeEach(() => {
    player = new Player();
})

test('the storage is empty when a player object is created', (): void => {
    expect(player.getWords().length).toBe(0);
});

test('the storage is not empty when a player adds a word', (): void => {
    player.addWord("word");

    expect(player.getWords().length).toBeGreaterThan(0);
})