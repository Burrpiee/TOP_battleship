import Ship from "./ship";

export default class Gameboard {
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.board = createGrid(this.boardSize);
        this.missedAttacks = [];
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
        //Boundary check
        if (x < 0 || y < 0) return false;

        if(isVertical) {
            if (y + ship.length > this.boardSize || x >= this.boardSize) return false;
        } else {
            if (x + ship.length > this.boardSize || y >= this.boardSize) return false;
        }

        //Overlap check
        for (let i = 0; i < ship.length; i++) {
            let currentX = x;
            let currentY = y;

            if (isVertical) {
                currentY += i;
            } else {
                currentX += i;
            }

            if (this.board[currentX][currentY].hasShip) return false;
        }

        return true;
    }

    // Attacking logic
    receiveAttack(x, y){
        const target = this.board[x][y];

        target.isHit = true;
        
        if (target.hasShip) {
            const ship = target.shipRef;
            ship.hit();

            return true;
        } else {
            this.missedAttacks.push([x, y]);
        }
    }
    // Game status
    areAllShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }

    randomlyPlaceShips() {

    }
}

// Helper functions
const createGrid = (size) => {
    return [...Array(size)].map(() => 
        [...Array(size)].map(() => ({hasShip: false, isHit: false, shipRef: null,}))
    );
};

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomBool = () => {
    return Math.random() < 0.5;
}