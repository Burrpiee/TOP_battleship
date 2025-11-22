 
const renderBoard = (board, containerId) => {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error('Container cannot be found');
        return;
    }

    container.innerHTML = '';

    const size = board.length;

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');

        container.appendChild(cell);
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