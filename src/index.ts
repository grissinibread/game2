import * as readline from "node:readline";

const rl = readline.createInterface({ input : process.stdin,
    output : process.stdout });


let index = 0;

export class game {
    private numOfWords: number = 3;
    private _words: string[] = [];

    public askWord() {
        if (index >= this.numOfWords) {
            rl.close();
            return;
        }

        rl.question(`Word ${index + 1}: `, (userInput) => {
            this._words.push(userInput);
            index++;
            this.askWord(); // ask next word
        });
    }

    public getWordsInArray(): number {
        return this._words.length;
    }
}

let newGame: game = new game;
newGame.askWord()