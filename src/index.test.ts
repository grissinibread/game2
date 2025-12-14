import { game } from "./game";

let newGame: game;

beforeEach(() => {
    newGame = new game();
})

test('empty array at the beginning of a game', () => {
    expect(newGame.getWordsInArray()).toBe(0);
});