import r from '../../src';

describe('index', () => {
  it ('returns correct list', () => {
    expect(r.modules).to.eql(['browserify', 'lambdr']);
  });

  it ('returns correct module', () => {
    expect(r('lambdr').hello).to.eq('requireG');
  });
});
