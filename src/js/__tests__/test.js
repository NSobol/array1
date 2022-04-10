import Character from '../Character';
import MathChar from '../MathChar';
import Magician from '../Magician';
import Daemon from '../Daemon';

test('Тестирование создания объекта класса Daemon', () => {
  const exp = {
    name: 'Aleks',
    type: 'Daemon',
    health: 100,
    level: 1,
    baseAttack: 10,
    defence: 40,
    distance: 1,
    _stoned: false,
  };

  const resolve = new Daemon('Aleks');
  expect(resolve).toEqual(exp);
});

test('Тестирование создания объекта класса Magician', () => {
  const exp = {
    name: 'Dmitriy',
    type: 'Magician',
    health: 100,
    level: 1,
    baseAttack: 10,
    defence: 40,
    distance: 1,
    _stoned: false,
  };

  const resolve = new Magician('Dmitriy');
  expect(resolve).toEqual(exp);
});

test('uncorrect name character', () => {
  expect(() => new Daemon('A')).toThrowError(
    new Error('Длина имени должна быть не менее 2-ух и не более 10-ти символов'),
  );
});

test('uncorrect type character', () => {
  expect(() => new Character('Anatoly', 'Druid')).toThrowError(
    new Error('Некорректный тип персонажа'),
  );
});

test('Тестирование атаки объекта класса Magician или Daemon на дистанции 2 без оцепенения', () => {
  const magician = new Magician('Dmitriy');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = false;
  expect(magician.attack).toEqual(90);
});

test('Тестирование атаки объекта класса Magician или Daemon на дистанции 3 без оцепенения', () => {
  const magician = new Magician('Dmitriy');
  magician.attack = 100;
  magician.distance = 3;
  magician.stoned = false;
  expect(magician.attack).toEqual(80);
});

test('Тестирование атаки объекта класса Magician или Daemon на дистанции 4 без оцепенения', () => {
  const magician = new Magician('Dmitriy');
  magician.attack = 100;
  magician.distance = 4;
  magician.stoned = false;
  expect(magician.attack).toEqual(70);
});
test('Тестирование атаки объекта класса Magician или Daemon на дистанции 5 без оцепенения', () => {
  const magician = new Magician('Dmitriy');
  magician.attack = 100;
  magician.distance = 5;
  magician.stoned = false;
  expect(magician.attack).toEqual(60);
});
test('Тестирование атаки объекта класса Magician или Daemon на дистанции 2 c оцепенением', () => {
  const magician = new Magician('Dmitriy');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = true;
  expect(magician.attack).toEqual(85);
});

test('Тестирование атаки объекта класса Magician или Daemon на дистанции 5 c оцепенением', () => {
  const magician = new Magician('Dmitriy');
  magician.attack = 10;
  magician.distance = 5;
  magician.stoned = true;
  expect(magician.attack).toEqual(0);
});