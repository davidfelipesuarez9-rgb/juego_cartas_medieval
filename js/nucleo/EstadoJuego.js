import { eventBus } from './EventBus.js';

class GameState {
  constructor() {
    this.state = {
      player: null,
      machine: null,
      currentTurn: null,
      turnNumber: 0,
      isBattleActive: false,
    };
  }

  get(key) {
    return this.state[key];
  }

  set(key, value) {
    this.state[key] = value;
    eventBus.emit('state:changed', { key, value });
  }

  reset() {
    this.state = {
      player: null,
      machine: null,
      currentTurn: null,
      turnNumber: 0,
      isBattleActive: false,
    };
    eventBus.emit('state:reset');
  }
}

export const gameState = new GameState();