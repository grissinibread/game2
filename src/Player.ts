export class Player {
    private words: string[] = [];

    addWord(word: string): void {
        this.words.push(word);
    }

    getWords(): string[] {
        return this.words;
    }
}