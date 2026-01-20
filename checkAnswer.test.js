const checkAnswer = require('./checkAnswer');

test('정답일 경우 true를 반환한다', () => {
  expect(checkAnswer(10, 10)).toBe(true);
});

test('오답일 경우 false를 반환한다', () => {
  expect(checkAnswer(5, 10)).toBe(false);
});