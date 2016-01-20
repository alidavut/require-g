import '../../src/register';
import lambdr from 'global:lambdr';

describe('register', () => {
  it ('registers corectly', () => {
    expect(lambdr.hello).to.eq('requireG');
  });
});
