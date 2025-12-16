export class Game {
    private static numOfWords: number = 3;
    private static _words: string[] = [];

    static getWords(): string[] {
        return this._words;
    }

    static putSomethingIntoThisArray(userInput: string): void {
        this._words.push(userInput);
    }

    static getBumOfWords(): number {
        return this.numOfWords;
    }

    static setBumofWords(bumOfWords: number ): void {
        this.numOfWords = bumOfWords;
    }
}