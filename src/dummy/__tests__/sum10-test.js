jest.unmock('../sum.js')

const sum = require ('../sum');

describe('check11plus', function() {
  it('adds 11 + 2 to equal 13', function() {
    expect(sum(11, 2)).toBe(13);
  });
    it('adds 11 + 3 to equal 14', function() {
    expect(sum(11, 3)).toBe(14);
  });
});

describe('check12plus', function() {
  it('adds 12 + 2 to equal 14', function() {
    expect(sum(12, 2)).toBe(14);
  });
    it('adds 12 + 3 to equal 15', function() {
    expect(sum(12, 3)).toBe(15);
  });
});
