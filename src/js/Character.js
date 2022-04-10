const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor(name, type) {
    if (name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов');
    }

    if (types.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректный тип персонажа');
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}