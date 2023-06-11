const add = require('../add');

describe('addition test suite',() => {
  test('adds 1 + 2 to equal 3', () => {
    const sum = add(1, 2)
    expect(sum).toBe(3);
  });
})

test('test, test', () => {
  const sum = add(1, 2)
  expect(sum).toBe(3);
});


describe('subtraction test suite',() => {
  test('adds 1 + 2 to equal 3', () => {
    const sum = add(1, 2)
  });
})

