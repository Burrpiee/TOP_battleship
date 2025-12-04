import * as domManager from "../src/domManager";

let boardSize, container;

describe('renderBoard', () => {
    beforeEach(() => {
        //Using 3x3 for multicase/faster checking
        boardSize = 3;

        document.body.innerHTML = '<div id="test-container"></div>';
        container = document.getElementById('test-container');

        domManager.renderBoard(boardSize, container);
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

describe('renderLabels', () => {
    test('should render labels correctly at the edges of the board', () => {
        boardSize = 3;

        document.body.innerHTML = `
        <div id="player1-wrapper">
            <div class="column-labels"></div>
            <div class="row-labels"></div>
        </div>`

        const columnLabels = document.querySelector('.column-labels');
        const rowLabels = document.querySelector('.row-labels');

        const player1Wrapper = document.getElementById('player1-wrapper');

        domManager.renderLabels(boardSize, player1Wrapper);

        expect(columnLabels.children[0].textContent).toBe('A');
        expect(rowLabels.children[0].textContent).toBe('1');

        expect(columnLabels.children[2].textContent).toBe('C');
        expect(rowLabels.children[2].textContent).toBe('3');   
    });
});

describe('updateCell', () => {
    test('should add hit class to cell on successful hit', () => {
        document.body.innerHTML = `
        <div id="test-container">
            <div data-x="5" data-y="5" class"board-cell"></div>
        </div>`;

        const cell = document.querySelector('[data-x="5"][data-y="5"]');
        const container = document.getElementById('test-container');

        domManager.updateCell(5, 5, true, container);

        expect(cell.classList).toContain('hit');
        expect(cell.classList).not.toContain('miss');
    });

    test('should add miss class to cell on unsuccessful hit', () => {
        document.body.innerHTML = `
        <div id="test-container">
            <div data-x="1" data-y="1" class"board-cell"></div>
        </div>`;

        const cell = document.querySelector('[data-x="1"][data-y="1"]');
        const container = document.getElementById('test-container');

        domManager.updateCell(1, 1, false, container);

        expect(cell.classList).toContain('miss');
        expect(cell.classList).not.toContain('hit');
    });
});