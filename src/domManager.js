 
const renderBoard = (board, containerId) => {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error('Container cannot be found');
        return;
    }

    container.innerHTML = '';

    const size = board.length;

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let x = 0; x < size; x++) {
        for(let y = 0; y < size; y++){
            const cell = document.createElement('div');

            cell.dataset.x = x;
            cell.dataset.y = y;

            cell.classList.add('board-cell'); 

            container.appendChild(cell);
        }
    }
};

const renderLabels = (board, wrapperId) => {
    const wrapper = document.getElementById(wrapperId);

    if (!wrapper) return;

    const size = board.length;

    const columnLabel = wrapper.querySelector('.column-labels');
    const rowLabel = wrapper.querySelector('.row-labels');
    
    columnLabel.style.display = 'grid';
    columnLabel.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    rowLabel.style.display = 'grid';
    rowLabel.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // First cell of label grid is blank
    // const emptyCellCol = document.createElement('div');
    // const emptyRowCol = document.createElement('div');
    // columnLabel.appendChild(emptyCellCol);
    // rowLabel.appendChild(emptyRowCol);

    for(let i = 0; i < size; i++) {
        const cellCol = document.createElement('div');
        const cellRow = document.createElement('div');

        let charCode = 65 + i; // 65 is A
        cellCol.textContent = String.fromCharCode(charCode);

        cellRow.textContent = i + 1;

        columnLabel.append(cellCol);
        rowLabel.append(cellRow);
    }
};

const updateCell = (x, y, hasShip, containerId) => {
    const container = document.getElementById(containerId);
    const cell = container.querySelector(`[data-x="${x}"][data-y="${y}"]`);

    cell.classList.add(hasShip ? 'hit' : 'miss');
};

const displayMessage = () => {

};

export default {
    renderBoard,
    renderLabels,
    updateCell,
    displayMessage,

}