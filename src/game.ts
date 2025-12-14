import * as readline from "node:readline";

const rl = readline.createInterface({ input : process.stdin,
    output : process.stdout });

export class game {
    private numOfWords: number = 3;
    private _words: string[] = [];

    private index: number = 0;
    public askWord() {
        if (this.index >= this.numOfWords) {
            rl.close();
            return;
        }

        rl.question(`Word ${this.index + 1}: `, (userInput) => {
            this._words.push(userInput);
            this.index++;
            this.askWord(); // ask next word
        });
    }

    public getWordsInArray(): number {
        return this._words.length;
    }
}