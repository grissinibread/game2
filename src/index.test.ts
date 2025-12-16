import {Game} from "./Game";

test('empty array at the beginning of a game', () => {
    expect(Game.getWords().length).toBe(0);
});