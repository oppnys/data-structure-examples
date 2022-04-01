import minOperations from '../../../src/utils/stack/minOperations';

test('minOperations 1', () => {
  expect(minOperations(['d1/', 'd2/', '../', 'd21/', './']))
    .toEqual(2);
});

test('minOperations 2', () => {
  expect(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']))
    .toEqual(3);
});

test('minOperations 3', () => {
  expect(minOperations(['d1/', '../', '../', '../']))
    .toEqual(0);
});
