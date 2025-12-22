"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Player_js_1 = require("./Player.js");
var Game_js_1 = require("./Game.js");
var readline = require("node:readline");
var rl = readline.createInterface({ input: process.stdin,
    output: process.stdout });
function ask(question) {
    return new Promise(function (resolve) {
        rl.question(question, resolve);
    });
}
function appleSauce(player) {
    return __awaiter(this, void 0, void 0, function () {
        var i, word;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < Game_js_1.Game.getNumOfWords())) return [3 /*break*/, 4];
                    return [4 /*yield*/, ask("Word ".concat(i + 1, ": "))];
                case 2:
                    word = _a.sent();
                    player.addWord(word);
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var bread, playerOne, playerTwo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Select difficulty: ");
                    console.log("Easy: 1");
                    console.log("Normal: 2");
                    console.log("Hard: 3");
                    return [4 /*yield*/, ask("")];
                case 1:
                    bread = _a.sent();
                    if (bread === "1") {
                        Game_js_1.Game.setNumOfWords(3);
                    }
                    else if (bread === "2") {
                        Game_js_1.Game.setNumOfWords(5);
                    }
                    else if (bread === "3") {
                        Game_js_1.Game.setNumOfWords(7);
                    }
                    else {
                        throw new Error("Didn't select an optional difficult!");
                    }
                    console.log("--Player One--");
                    playerOne = new Player_js_1.Player();
                    return [4 /*yield*/, appleSauce(playerOne)];
                case 2:
                    _a.sent();
                    console.log("--Player Two--");
                    playerTwo = new Player_js_1.Player();
                    return [4 /*yield*/, appleSauce(playerTwo)];
                case 3:
                    _a.sent();
                    rl.close();
                    console.log(playerOne.getWords());
                    console.log(playerTwo.getWords());
                    return [2 /*return*/];
            }
        });
    });
}
main();
