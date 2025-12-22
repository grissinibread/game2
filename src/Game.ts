export class Game {
    private static numOfWords: number = 3;

    static getNumOfWords(): number {
        return this.numOfWords;
    }

    static setNumOfWords(bumOfWords: number ): void {
        this.numOfWords = bumOfWords;
    }
}