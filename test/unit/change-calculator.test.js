var expect = require('chai').expect
const calculateChange = require('../../lib/change-calculator');

describe('Change Calculator', () => {
  it('returns [50, 20, 10, 5] when calculate change is called with (215, 300)', () => {
    const result = calculateChange(215, 300);
    const expected = [50, 20, 10, 5];
    expect(result).to.eql(expected)
  })

  it('returns [100, 10, 2, 2] when calculateChange is called with (486, 600)', () => {
    const result = calculateChange(486, 600);
    const expected = [100, 10, 2, 2];
    expect(result).to.eql(expected);
  });

  it('returns [200, 100, 50, 20, 10, 5, 2, 1] when calculateChange is called with (12, 400)', () => {
    const result = calculateChange(12, 400);
    const expected = [200, 100, 50, 20, 10, 5, 2, 1];
    expect(result).to.eql(expected);
  });
});