const { winPoint } = require("../tennisGame");

test("should handle player1 winning a point in a regular situation", () => {
  let game = {
    player1: ["Love"],
    player2: ["Love"],
    stateGame: "",
    winner: "",
  };
  winPoint("player1", game);
  expect(game.player1).toEqual(["Love", "15"]);
  expect(game.player2).toEqual(["Love", "Love"]);
  expect(game.stateGame).toBe("Game Started !");
});

test("should handle player2 winning a point in a regular situation", () => {
  let game = {
    player1: ["Love"],
    player2: ["Love"],
    stateGame: "",
    winner: "",
  };
  winPoint("player2", game);
  expect(game.player1).toEqual(["Love", "Love"]);
  expect(game.player2).toEqual(["Love", "15"]);
  expect(game.stateGame).toBe("Game Started !");
});

test("should handle player1 winning a second point in a regular situation", () => {
  let game = {
    player1: ["Love", "15"],
    player2: ["Love", "Love"],
    stateGame: "",
    winner: "",
  };
  winPoint("player1", game);
  expect(game.player1).toEqual(["Love", "15", "30"]);
  expect(game.player2).toEqual(["Love", "Love", "Love"]);
  expect(game.stateGame).toBe("Game Started !");
});

test("should handle player2 winning a second point in a regular situation", () => {
  let game = {
    player1: ["Love", "Love"],
    player2: ["Love", "15"],
    stateGame: "",
    winner: "",
  };
  winPoint("player2", game);
  expect(game.player1).toEqual(["Love", "Love", "Love"]);
  expect(game.player2).toEqual(["Love", "15", "30"]);
  expect(game.stateGame).toBe("Game Started !");
});

test("should handle Deuce situation", () => {
  let game = {
    player1: ["Love", "15", "15", "30", "30", "40"],
    player2: ["Love", "Love", "15", "15", "30", "30"],
    stateGame: "Game Started !",
    winner: "",
  };
  winPoint("player2", game);
  expect(game.player1).toEqual(["Love", "15", "15", "30", "30", "40", "40"]);
  expect(game.player2).toEqual(["Love", "Love", "15", "15", "30", "30", "40"]);
  expect(game.stateGame).toBe("Deuce");
});

test("should handle Advantage situation for player1", () => {
  let game = {
    player1: ["Love", "15", "15", "30", "30", "40", "40"],
    player2: ["Love", "Love", "15", "15", "30", "30", "40"],
    stateGame: "Deuce",
    winner: "",
  };
  winPoint("player1", game);
  expect(game.player1).toEqual(["Love", "15", "15", "30", "30", "40", "40", "Advantage"]);
  expect(game.player2).toEqual(["Love", "Love", "15", "15", "30", "30", "40", "40"]);
  expect(game.stateGame).toBe("Game Started !");
});
test("should handle Advantage situation for player1 and player2 wins the next point", () => {
  let game = {
    player1: ["Love", "15", "15", "30", "30", "40", "40", "Advantage"],
    player2: ["Love", "Love", "15", "15", "30", "30", "40", "40"],
    stateGame: "Game Started !",
    winner: "",
  };
  winPoint("player2", game);
  expect(game.player1).toEqual(["Love", "15", "15", "30", "30", "40", "40", "Advantage", "40"]);
  expect(game.player2).toEqual(["Love", "Love", "15", "15", "30", "30", "40", "40", "40"]);
  expect(game.stateGame).toBe("Deuce");
});

test("should handle Advantage situation for player2", () => {
  let game = {
    player1: ["Love", "15", "15", "30", "30", "40", "40"],
    player2: ["Love", "Love", "15", "15", "30", "30", "40"],
    stateGame: "Deuce",
    winner: "",
  };
  winPoint("player2", game);
  expect(game.player1).toEqual(["Love", "15", "15", "30", "30", "40", "40", "40"]);
  expect(game.player2).toEqual(["Love", "Love", "15", "15", "30", "30", "40", "Advantage"]);
  expect(game.stateGame).toBe("Game Started !");
});
test("should handle Advantage situation for player2 and player1 wins the next point", () => {
  let game = {
    player1: ["Love", "15", "15", "30", "30", "40", "40", "40"],
    player2: ["Love", "Love", "15", "15", "30", "30", "40", "Advantage"],
    stateGame: "Game Started !",
    winner: "",
  };
  winPoint("player1", game);
  expect(game.player1).toEqual(["Love", "15", "15", "30", "30", "40", "40", "40", "40"]);
  expect(game.player2).toEqual(["Love", "Love", "15", "15", "30", "30", "40", "Advantage", "40"]);
  expect(game.stateGame).toBe("Deuce");
});

test("should handle player1 in Advantage situation and player1 wins the next point", () => {
  let game = {
    player1: ["Love", "15", "15", "30", "30", "40", "40", "Advantage"],
    player2: ["Love", "Love", "15", "15", "30", "30", "40", "40"],
    stateGame: "Game Started !",
    winner: "",
  };
  winPoint("player1", game);
  expect(game.player1).toEqual(["Love", "15", "15", "30", "30", "40", "40", "Advantage", "Winner !"]);
  expect(game.player2).toEqual(["Love", "Love", "15", "15", "30", "30", "40", "40", "40"]);
  expect(game.stateGame).toBe("Game Over");
  expect(game.winner).toBe("player1");
});

test("should handle player2 in Advantage situation and player2 wins the next point", () => {
  let game = {
    player1: ["Love", "15", "15", "30", "30", "40", "40", "40"],
    player2: ["Love", "Love", "15", "15", "30", "30", "40", "Advantage"],
    stateGame: "Game Started !",
    winner: "",
  };
  winPoint("player2", game);
  expect(game.player1).toEqual(["Love", "15", "15", "30", "30", "40", "40", "40", "40"]);
  expect(game.player2).toEqual(["Love", "Love", "15", "15", "30", "30", "40", "Advantage", "Winner !"]);
  expect(game.stateGame).toBe("Game Over");
  expect(game.winner).toBe("player2");
});

test("should handle no next point after Game Over", () => {
  let game = {
    player1: ["Love", "15", "15", "30", "30", "40", "40", "40", "40"],
    player2: ["Love", "Love", "15", "15", "30", "30", "40", "Advantage", "Winner !"],
    stateGame: "Game Over",
    winner: "player2",
  };
  winPoint("player2", game);
  expect(game.player1).toEqual(["Love", "15", "15", "30", "30", "40", "40", "40", "40"]);
  expect(game.player2).toEqual(["Love", "Love", "15", "15", "30", "30", "40", "Advantage", "Winner !"]);
  expect(game.stateGame).toBe("Game Over");
  expect(game.winner).toBe("player2");
});

test("should handle no next point after Game Over", () => {
  let game = {
    player1: ["Love", "Love", "15", "15", "30", "30", "40", "Advantage", "Winner !"],
    player2: ["Love", "15", "15", "30", "30", "40", "40", "40", "40"],
    stateGame: "Game Over",
    winner: "player1",
  };
  winPoint("player1", game);
  expect(game.player1).toEqual(["Love", "Love", "15", "15", "30", "30", "40", "Advantage", "Winner !"]);
  expect(game.player2).toEqual(["Love", "15", "15", "30", "30", "40", "40", "40", "40"]);
  expect(game.stateGame).toBe("Game Over");
  expect(game.winner).toBe("player1");
});
