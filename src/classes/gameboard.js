import Ship from "./ship";

export default class Gameboard {
    constructor() {
        this.boardSize = 10 // 10 is standard battleship board size
        this.board = createGrid(this.boardSize);
        this.missedAtacks = [];
        this.ships = [];
    }

    // Ship placement
    placeShip(ship, x, y, isVertical) {

        if (!this.isValidPlacement(ship, x, y, isVertical)) return false;

        for (let i = 0; i < ship.length; i++) {
            let currentX = x;
            let currentY = y;

            if (isVertical) {
                currentY += i;
            } else {
                currentX += i;
            }

            const cell = this.board[currentX][currentY];
            
            cell.hasShip = true;
            cell.shipRef = ship;
        }
        this.ships.push(ship);
        return true;
    }

    //Validating placement
    isValidPlacement(ship, x, y, isVertical) {
        if (x < 0 || y < 0) return false;

        if (x + ship.length > this.boardSize) return false;

        if (y + ship.length > this.boardSize) return false;

        return true;
    }

    // Attacking logic
    receiveAttack(x, y){

    }
    // Game status
}

const createGrid = (size) => {
    return [...Array(size)].map(() => 
        [...Array(size)].map(() => ({hasShip: false, isHit: false, shipRef: null,}))
    );
}