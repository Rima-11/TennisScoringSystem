let { getScoreInText, getScoreInNumber } = require("./utils");

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

  let winPoint = (player, game) => {
    let scorePlayer1 = getScoreInNumber(game.player1);
    let scorePlayer2 = getScoreInNumber(game.player2);
    let lastPoint1 = scorePlayer1[scorePlayer1.length - 1];
    let lastPoint2 = scorePlayer2[scorePlayer2.length - 1];
    if (game.stateGame === "Game Over") {
      return;
    }
    if (
      player === "player1" &&
      game.player2[game.player2.length - 1] === "Advantage"
    ) {
      game.player1.push("40");
      game.player2.push("40");
      game.stateGame = "Deuce";
      return;
    }
    if (
      player === "player2" &&
      game.player1[game.player1.length - 1] === "Advantage"
    ) {
      game.player1.push("40");
      game.player2.push("40");
      game.stateGame = "Deuce";
      return;
    }
    switch (player) {
      case "player1":
        if (game.stateGame !== "Deuce" && lastPoint1 !== "Advantage") {
          scorePlayer1.push(lastPoint1 + 1);
        } else {
          scorePlayer1 = addAdvantageToPlayer(game, player);
        }
        game.player1 = scorePlayer1;
        scorePlayer2.push(lastPoint2);
        game.player2 = scorePlayer2;

        game.stateGame = getStateGame(
          getScoreInNumber(game.player1),
          getScoreInNumber(game.player2)
        );
        break;

      case "player2":
        if (game.stateGame !== "Deuce" && lastPoint2 !== "Advantage") {
          scorePlayer2.push(lastPoint2 + 1);
        } else {
          scorePlayer2 = addAdvantageToPlayer(game, player);
        }

        game.player2 = scorePlayer2;
        scorePlayer1.push(lastPoint1);
        game.player1 = scorePlayer1;
        game.stateGame = getStateGame(
          getScoreInNumber(game.player1),
          getScoreInNumber(game.player2)
        );
        break;
    }
    game.player1 = getScoreInText(game.player1);
    game.player2 = getScoreInText(game.player2);
  };

  let addAdvantageToPlayer = (game, player) => {
    let scoreMissPointPlayer = [];
    let scoreWinPointPlayer = [];
    if (player === "player1") {
      scoreWinPointPlayer = getScoreInNumber(game[player]);
      scoreMissPointPlayer = getScoreInNumber(game["player2"]);
    }
    if (player === "player2") {
      scoreWinPointPlayer = getScoreInNumber(game[player]);
      scoreMissPointPlayer = getScoreInNumber(game["player1"]);
    }

    let lastPointW = scoreWinPointPlayer[scoreWinPointPlayer.length - 1];

    if (game.stateGame === "Deuce") {
      scoreWinPointPlayer.push("Advantage");
      return scoreWinPointPlayer;
    }

    if (lastPointW === "Advantage") {
      scoreWinPointPlayer.push("Winner !");
      game[player] = getScoreInText(scoreWinPointPlayer);
      game.stateGame = "Game Over";
      game.winner = player;
      return game[player];
    }
  };

  startGame(game);
  winPoint("player1", game);
  winPoint("player2", game);
  console.log(game);

  module.exports = { startGame, getStateGame, winPoint };
};
tennisGame();
