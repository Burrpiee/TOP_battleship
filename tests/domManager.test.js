import domManager from "../src/domManager";
import Player from "../src/classes/player";
import Ship from "../src/classes/ship";

describe('DomManager.renderBoard', () => {
    beforeEach(() => {

    });

    test('is able to create a 3 x 3 grid with 9 cells', () => {
        const mockBoard = [...Array(3)].map(() => [...Array(3)].map(() => null));

        document.body.innerHTML = '<div id="test-container"></div>';

        domManager.renderBoard(mockBoard, 'test-container');

        const container = document.getElementById('test-container');
        
        //Check how many cells in container
        expect(container.children.length).toBe(9); 
    })
});