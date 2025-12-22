import {Player} from "./Player.js";
import {Game} from "./Game.js";
import * as readline from "node:readline";

const rl = readline.createInterface({ input : process.stdin,
    output : process.stdout });

function ask(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, resolve);
        });
}

async function appleSauce(player: Player) {
    for (let i: number = 0; i < Game.getNumOfWords(); i++) {
        const word: string = await ask(`Word ${i + 1}: `);
        player.addWord(word);
    }
}

async function main() {
    console.log("Select difficulty: ")
    console.log("Easy: 1")
    console.log("Normal: 2")
    console.log("Hard: 3")

    let bread = await ask("");
    if(bread === "1") {
        Game.setNumOfWords(3);
    } else if(bread === "2") {
        Game.setNumOfWords(5)
    } else if(bread === "3") {
        Game.setNumOfWords(7)
    } else {
        throw new Error("Didn't select an optional difficult!");
    }

    console.log("--Player One--");
    let playerOne: Player = new Player();
    await appleSauce(playerOne);

    console.log("--Player Two--");
    let playerTwo: Player = new Player();
    await appleSauce(playerTwo);

    rl.close();

    console.log(playerOne.getWords())
    console.log(playerTwo.getWords())
}

main();