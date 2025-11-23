 
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

const renderLabels = (board, containerId) => {
}

const updateCell = () => {

};

const displayMessage = () => {

};

export default {
    renderBoard,
    renderLabels,
    updateCell,
    displayMessage,

}