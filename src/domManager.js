
const setupWrapper = (boardSize, wrapperElement) => {
    if (!wrapperElement) return;

    const template = `1fr repeat(${boardSize}}, 1fr)`

    wrapperElement.style.gridTemplateColumns = template;
    wrapperElement.style.gridTemplateRows = template;
}

const renderBoard = (boardSize, container) => {
    if (!container) {
        console.error('Container cannot be found');
        return;
    }

    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;

    for(let x = 0; x < boardSize; x++) {
        for(let y = 0; y < boardSize; y++){
            const cell = document.createElement('div');

            cell.dataset.x = x;
            cell.dataset.y = y;

            cell.classList.add('board-cell'); 

            container.appendChild(cell);
        }
    }
};

const renderLabels = (boardSize, wrapper) => {
    if (!wrapper) return;

    const columnLabel = wrapper.querySelector('.column-labels');
    const rowLabel = wrapper.querySelector('.row-labels');
    
    columnLabel.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    rowLabel.style.gridTemplateRows = `repeat(${boardSize}, 1fr)`;

    for(let i = 0; i < boardSize; i++) {
        const cellCol = document.createElement('div');
        const cellRow = document.createElement('div');
        cellCol.classList.add('label-cell');
        cellRow.classList.add('label-cell');

        let charCode = 65 + i; // 65 is A
        cellCol.textContent = String.fromCharCode(charCode);
        cellRow.textContent = i + 1;

        columnLabel.append(cellCol);
        rowLabel.append(cellRow);
    }
};

const updateCell = (x, y, hasShip, container) => {
    const cell = container.querySelector(`[data-x="${x}"][data-y="${y}"]`);

    cell.classList.add(hasShip ? 'hit' : 'miss');
};

const displayMessage = () => {
    
};

export {
    setupWrapper,
    renderBoard,
    renderLabels,
    updateCell,
    displayMessage,

}