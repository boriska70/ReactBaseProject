jest.unmock('../sum.js')

const sum = require ('../sum');

describe('check1plus', function() {
  it('adds 1 + 2 to equal 3', function() {
    expect(sum(1, 2)).toBe(3);
  });
    it('adds 1 + 3 to equal 4', function() {
    expect(sum(1, 3)).toBe(4);
  });
});

describe('check2plus', function() {
  it('adds 2 + 2 to equal 4', function() {
    expect(sum(2, 2)).toBe(4);
  });
    it('adds 2 + 3 to equal 5', function() {
    expect(sum(2, 3)).toBe(5);
  });
});
