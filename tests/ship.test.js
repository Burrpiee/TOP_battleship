import Ship from '../src/classes/ship';

describe('Ship', () => {
    let ship;

    beforeEach(() => {
        ship = new Ship(3);
    });

    test('gets length correctly', () => {
        expect(ship.length).toBe(3);
    });

    test('registers hits correctly', () => {
        ship.hit();
        ship.hit();
        expect(ship.hits).toBe(2);
    })

    test('should sink when hits equal length', () => {
        ship.hit();
        ship.hit();
        ship.hit();

        expect(ship.isSunk()).toBeTruthy;
    })

    test('Should not sink if hits is lesser than length', () => {
        ship.hit();

        expect(ship.isSunk()).toBeFalsy;
    })
})