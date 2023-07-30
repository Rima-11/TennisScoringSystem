## Getting Started
Install Jest using [`yarn`](https://yarnpkg.com/en/package/jest):

```bash
yarn add --dev jest
```

Or [`npm`](https://www.npmjs.com/package/jest):

```bash
npm install --save-dev jest
```

To run tests: 
```bash
npm test
```
To run script: 
```bash
node tennisGame.js
```

## Description
The following code presents a simplified scoring system for a tennis game, demonstrating various scenarios that have already been addressed. I have handled the different states of a set. The game starts when the players' scores increase beyond zero. If one of the players reaches a score of "40" and wins the next point, they secure the game. In the case where both players have a score of "40," the state changes to "Deuce." The player who wins the subsequent point gains the Advantage, and if they win the next point as well, they emerge victorious, and the state transitions to "Game Over," revealing the winning player. However, if the opponent wins the next point after the Advantage, the state resets to "Deuce."
