const tennisGame = () => {
  let game = {
    player1: [],
    player2: [],
    stateGame: "",
    winner: "",
  };
  let startGame = (game) => {
    game.player1.push(0);
    game.player2.push(0);
    game.stateGame = getStateGame(game.player1, game.player2);
    game.winner = "";
  };
  let getStateGame = (player1, player2) => {
    if (
      player1[player1?.length - 1] === 3 &&
      player2[player2?.length - 1] === 3
    ) {
      return "Deuce";
    }
    if (
      player1[player1.length - 1] === "Winner !" ||
      player2[player2.length - 1] === "Winner !"
    ) {
      return "Game Over";
    }
    if (player1?.length !== 0 && player2?.length !== 0) {
      return "Game Started !";
    }
  };

  module.exports = { startGame, getStateGame };
};
tennisGame();
