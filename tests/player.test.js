import Player from "../src/classes/player";

describe('Player', () => {
    test('can attack other players', () => {
        const player = new Player();
        const computer = new Player();

        player.attack(computer, 0, 0);
        expect(computer.gameboard.board[0][0].isHit).toBeTruthy();
    });
})