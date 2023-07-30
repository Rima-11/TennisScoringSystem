function getScoreInText(score) {
  return score.map((e) => {
    return e === 0
      ? (e = "Love")
      : e === 1
      ? (e = "15")
      : e === 2
      ? (e = "30")
      : e === 3
      ? (e = "40")
      : e === "Advantage"
      ? (e = "Advantage")
      : e;
  });
}
function getScoreInNumber(score) {
  return score.map((e) => {
    return e === "Love"
      ? (e = 0)
      : e === "15"
      ? (e = 1)
      : e === "30"
      ? (e = 2)
      : e === "40"
      ? (e = 3)
      : e === "Advantage"
      ? (e = "Advantage")
      : e;
  });
}

module.exports = { getScoreInText, getScoreInNumber };
