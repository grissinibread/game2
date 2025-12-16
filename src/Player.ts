import * as readline from "node:readline";
import {Game} from "./Game";

const rl = readline.createInterface({ input : process.stdin,
    output : process.stdout });

export class Player {
    index: number = 0;

    public applesauce() {
        if (this.index >= Game.getBumOfWords()) {
            rl.close();
            return;
        }

        rl.question(`Word ${this.index + 1}: `, (userInput: string): void => {
            Game.putSomethingIntoThisArray(userInput);
            this.index++;
            this.applesauce(); // ask next word
        });
    }
}