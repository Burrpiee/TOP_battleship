import Ship from "./ship";

export default class Gameboard {
    constructor() {
        this.board = createGrid(10); //10 is standard battleship board size
        this.missedAtacks = [];
        this.ships = [];
    }

    // Ship placement
    placeShip(ship, x, y, isVertical) {

        for (let i = 0; i < ship.length; i++) {
            let currentX = x;
            let currentY = y;

            if (isVertical) {
                currentX = x + i;
            } else {
                currentY = y + i;
            }

            cell = this.board[currentX][currentY];
            
            cell.hasShip = true;
            cell.shipRef = ship;
        }

        this.ships.push(ship);
        return true;
    }

    //Validating placement
    isValidPlacement(ship, x, y, isVertical) {

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