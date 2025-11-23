import domManager from "../src/domManager";

let mockBoard, container;

describe('renderBoard', () => {
    beforeEach(() => {
        //Using 3x3 for multicase/faster checking
        mockBoard = [...Array(3)].map(() => [...Array(3)].map(() => null));

        document.body.innerHTML = '<div id="test-container"></div>';
        domManager.renderBoard(mockBoard, 'test-container');

        container = document.getElementById('test-container');
    });

    test('is able to create a 3 x 3 grid with 9 cells', () => { 
        //Check how many cells in container
        expect(container.children.length).toBe(9); 
    });

    test('should set correct x and y coords to the cells dataset', () => {
        const firstCell = container.children[0];
        const lastCell = container.children[8];
        
        expect(firstCell.dataset.x).toBe('0');
        expect(firstCell.dataset.y).toBe('0');

        expect(lastCell.dataset.x).toBe('2');
        expect(lastCell.dataset.y).toBe('2');
    });
});

describe('updateCell', () => {
    test('should add hit class to cell on successful hit', () => {
        document.body.innerHTML = `
        <div id="test-container">
            <div data-x="5" data-y="5" class"board-cell"></div>
        </div>`;

        const cell = document.querySelector('[data-x="5"][data-y="5"]');

        updateCell(5, 5, true, 'test-container');

        expect(cell.classList).toContain('hit');
        expect(cell.classList).not.toContain('miss');
    });

    test('should add miss class to cell on unsuccessful hit', () => {

    });
});