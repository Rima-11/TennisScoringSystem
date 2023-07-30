const { getStateGame, startGame } = require("../tennisGame");

test('should return "Game Started !" when game started', () => {
  let game = {
    player1: [],
    player2: [],
    stateGame: "",
    winner: "",
  };
  startGame(game);
  getStateGame(game.player1, game.player2);
  expect(game.player1).toStrictEqual([0]);
  expect(game.player2).toStrictEqual([0]);
  expect(game.stateGame).toBe("Game Started !");
});

test('should return "Deuce" if both players have a last element equal to 3', () => {
  let game = {
    player1: [0, 1, 2, 3],
    player2: [0, 0, 1, 3],
    stateGame: "Deuce",
    winner: "",
  };
  const result = getStateGame(game.player1, game.player2);
  expect(result).toBe("Deuce");
});

test('should return "Game Over" if both players have a last element equal to 3', () => {
  let game = {
    player1: [0, 1, 1, 2, 2, 3, 3, "Advantage", "Winner !"],
    player2: [0, 0, 1, 1, 2, 2, 3, 3, 3],
    stateGame: "Game Over",
    winner: "player1",
  };
  const result = getStateGame(game.player1, game.player2);
  expect(result).toBe("Game Over");
});