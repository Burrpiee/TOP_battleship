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
        const defaultCell = {hasShip: false, isHit: false, shipId: null};

        board.flat().forEach((cell) => {
            expect(cell).toEqual(defaultCell);
        });
    });

    test('allows placement of ships horizontally', () => {
        gameboard.placeShip(0, 0, ship, false); //False = horizontal

        expect(board[0][0].hasShip).toBeTruthy();
        expect(board[0][1].hasShip).toBeTruthy();
        expect(board[0][2].hasShip).toBeTruthy();

        //Check cell next to ship
        expect(board[0][3].hasShip).toBeFalsy();
    });
});