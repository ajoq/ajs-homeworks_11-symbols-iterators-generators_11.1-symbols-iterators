import Person from '../Person';
import Team from '../Team';

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Лучник2',
  type: 'Bowman',
  health: 60,
  level: 3,
  attack: 40,
  defence: 10,
};

const char3 = {
  name: 'Лучник3',
  type: 'Bowman',
  health: 10,
  level: 2,
  attack: 60,
  defence: 50,
};

test('Person', () => {
  const expected = char1;
  const received = new Person(expected);
  expect(received).toEqual(expected);
});

test('Team', () => {
  const expected = { players: [new Person(char1), new Person(char2), new Person(char3)] };
  const received = new Team(new Person(char1), new Person(char2), new Person(char3));
  expect(received).toEqual(expected);
});
