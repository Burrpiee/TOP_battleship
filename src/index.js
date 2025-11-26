import "./styles.css";

import Player from "./classes/player";
import Ship from "./classes/ship";

import { 
    renderBoard,
    renderLabels,
    updateCell,
    displayMessage,
} from "./domManager";


const dom = {
    player1Wrapper: document.getElementById('player1-wrapper'),
    player2Wrapper: document.getElementById('player2-wrapper'),
    player1Container: document.getElementById('player1-container'),
    player2Container: document.getElementById('player2-container'),
};

const init = () => {  
    const player1 = new Player();
    const player2 = new Player();

    renderBoard(player1.gameboard, player1Container)
};