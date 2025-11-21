import Gameboard from "./gameboard";

export default class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
    }

    attack(target, x, y) {
        return target.gameboard.receiveAttack(x, y);
    }
}