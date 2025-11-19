import Gameboard from "../src/classes/gameboard";
import Ship from "../src/classes/ship";

describe('Gameboard', () => {
    let gameboard, board, ship;

    beforeEach(() => {
        gameboard = new Gameboard(); // Default battleship grid is 10 x 10
        board = gameboard.board;
        ship = new Ship(3); //Ship of length 3
    });
    
    test('generates the correct amount of rows (10)', () => {
        expect(board.length).toBe(10);
    });

    test('generates the correct amount of columns (10)', () => {
        const allRowsHaveCorrectColumns = board.every(row => row.length === 10);
        expect(allRowsHaveCorrectColumns).toBeTruthy();
    });

    test('cells have the correct properties', () => {
        const defaultCell = {hasShip: false, isHit: false, shipRef: null};

        board.flat().forEach((cell) => {
            expect(cell).toEqual(defaultCell);
        });
    });

    test('allows placement of ships horizontally', () => {
        gameboard.placeShip(ship, 0, 0, false); // False = horizontal

        expect(board[0][0].hasShip).toBeTruthy();
        expect(board[0][0].shipRef).toBe(ship);

        expect(board[1][0].hasShip).toBeTruthy();
        expect(board[1][0].shipRef).toBe(ship);

        expect(board[2][0].hasShip).toBeTruthy();
        expect(board[2][0].shipRef).toBe(ship);

        //Check cell next to ship (false)
        expect(board[0][1].hasShip).toBeFalsy();
    });

    test('allows placement of ships vertically', () => {
        gameboard.placeShip(ship, 0, 0, true) // True = vertical

        expect(board[0][0].hasShip).toBeTruthy();
        expect(board[0][0].shipRef).toBe(ship);

        expect(board[0][1].hasShip).toBeTruthy();
        expect(board[0][1].shipRef).toBe(ship);

        expect(board[0][2].hasShip).toBeTruthy();
        expect(board[0][2].shipRef).toBe(ship);

        //Check cell next to ship (false)
        expect(board[1][0].hasShip).toBeFalsy();
    });

    test('rejects placement of ships crossing horizontal board bounds', () => {
        expect(gameboard.placeShip(ship, 8, 0, false)).toBeFalsy();
    });

    test('rejects placement of ships crossing vertical board bounds', () => {
        expect(gameboard.placeShip(ship, 0, 8, true)).toBeFalsy();
    });

    test('prevent out of bounds x and y values', () => {
        expect(gameboard.placeShip(ship, -1, -2, false)).toBeFalsy();
        expect(gameboard.placeShip(ship, 11, 11, false)).toBeFalsy();
        expect(gameboard.placeShip(ship, -1, -2, true)).toBeFalsy();
        expect(gameboard.placeShip(ship, 11, 11, true)).toBeFalsy();
    });

    test('accepts vertical placement of ships at horizontal edge', () => {
        expect(gameboard.placeShip(ship, 9, 7, true)).toBeTruthy();
    });

    test('accept horizontal placement of ships at vertical edge', () => {
        expect(gameboard.placeShip(ship, 7, 9, false)).toBeTruthy();
    });

    test('prevents overlapping placement of ships', () => {
        gameboard.placeShip(ship, 0, 0, false);
        let ship2 = new Ship(3);

        expect(gameboard.placeShip(ship2, 0, 0, true)).toBeFalsy();
    });

    test('records hits on ships and gameboard from receiveAttack function', () => {
        gameboard.placeShip(ship, 0, 0, false);
        gameboard.receiveAttack(0, 0);
        
        expect(board[0][0].isHit).toBeTruthy();
        expect(ship.hits).toBe(1);
    });

    test('pushes stores missed attacks in the missedAttacks array', () => {
        gameboard.receiveAttack(0, 0);

        expect(gameboard.missedAttacks).toContainEqual([0, 0]);
        expect(board[0][0].isHit).toBeTruthy();
    });
});