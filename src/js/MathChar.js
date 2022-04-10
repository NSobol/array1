import Character from './Character';

export default class MathChar extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.stoned = false;
  }

  set stoned(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._stoned = value;
  }

  get stoned() {
    // eslint-disable-next-line no-underscore-dangle
    return this._stoned;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    if (this.distance === 2) {
      this.baseAttack *= 0.9;
    }

    if (this.distance === 3) {
      this.baseAttack *= 0.8;
    }

    if (this.distance === 4) {
      this.baseAttack *= 0.7;
    }

    if (this.distance === 5) {
      this.baseAttack *= 0.6;
    }

    if (this.stoned === true) {
      this.baseAttack -= Math.log2(this.distance) * 5;
    }
    if (this.baseAttack > 0) {
      return Math.round(this.baseAttack);
    }

    this.baseAttack = 0;
    return this.baseAttack;
  }
}