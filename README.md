[![Build status](https://ci.appveyor.com/api/projects/status/hyfc7ivj5e90kk4j?svg=true)](https://ci.appveyor.com/project/ajoq/ajs-homeworks-11-symbols-iterators-generators-11-1)

## Описание

В этом задании предполагается, что все персонажи содержат следующий набор полей:
```javascript
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```

## Символы & итераторы

### Легенда

Для поддержки логики необходимо сделать объекты класса `Team`(команда, в которой хранятся персонажи противника на текущий раунд) итерируемыми. При итерации они должны выдавать персонажей.

### Описание

Реализуйте итератор в классе `Team`, который по одному выдаёт персонажей (объекты типа `Person`).