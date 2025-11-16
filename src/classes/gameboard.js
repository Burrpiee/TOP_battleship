
export default class Gameboard {
    constructor() {
        this.board = createGrid(10); //10 is standard battleship board size
        this.missedAtacks = [];
        this.ships = [];
    }

    // Ship placement
    placeShip() {

    }
    // Attacking logic
    receiveAttack(x, y){

    }
    // Game status
}

const createGrid = (size) => {
    return [...Array(size)].map(() => 
        [...Array(size)].map(() => ({hasShip: false, isHit: false, shipId: null}))
    );
}