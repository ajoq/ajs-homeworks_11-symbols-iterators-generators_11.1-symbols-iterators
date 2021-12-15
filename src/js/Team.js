export default class Team {
  constructor(...players) {
    this.players = players;
  }

  [Symbol.iterator]() {
    return this.players[Symbol.iterator]();
  }
}
