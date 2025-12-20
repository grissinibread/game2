import {Game} from "./Game.js";

test('empty array at the beginning of a game', () => {
    expect(Game.getWords().length).toBe(0);
});