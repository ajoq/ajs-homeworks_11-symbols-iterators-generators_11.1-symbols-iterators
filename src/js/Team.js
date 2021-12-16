export default class Team {
  constructor(...players) {
    this.players = players;
  }

  [Symbol.iterator]() {
    this.nextId = 0;
    this.current = this.players[this.nextId];
    return this;
  }

  next() {
    if (this.nextId < this.players.length) {
      const result = { done: false, value: this.players[this.nextId++] };
      return result;
    }
    return { done: true };
  }

  // Такой код тоже работает
  //   [Symbol.iterator]() {
  //     return this.players[Symbol.iterator]();
  //   }
}
