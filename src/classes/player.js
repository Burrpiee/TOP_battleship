import Gameboard from "./gameboard";

export default class Player {
    constructor(name, boardSize) {
        this.name = name;
        this.gameboard = new Gameboard(boardSize);
    }

    attack(target, x, y) {
        return target.gameboard.receiveAttack(x, y);
    }
}