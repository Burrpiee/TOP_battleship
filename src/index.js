import "./styles.css";

import Player from "./classes/player";
import Ship from "./classes/ship";

import { 
    setupWrapper,
    renderBoard,
    renderLabels,
    updateCell,
    displayMessage,
} from "./domManager";

let dom = {};

const cacheDom = () => {
    dom.player1Wrapper = document.getElementById('player1-wrapper');
    dom.player2Wrapper = document.getElementById('player2-wrapper');
    dom.player1Container = document.getElementById('player1-board-container');
    dom.player2Container = document.getElementById('player2-board-container');
};

const init = () => {
    cacheDom();
    const boardSize = 10;

    const player1 = new Player('player1', boardSize);
    const player2 = new Player('player2', boardSize);

    // Player 1 setup
    setupWrapper(boardSize, dom.player1Wrapper);
    renderLabels(boardSize, dom.player1Wrapper);
    renderBoard(boardSize, dom.player1Container);

    //Player 2 setup
    setupWrapper(boardSize, dom.player2Wrapper);
    renderLabels(boardSize, dom.player2Wrapper);
    renderBoard(boardSize, dom.player2Container);
};

init();