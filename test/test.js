import chai from 'chai';

describe('test code', () => {
  it('start', (done) => {
    const result = 'OK';
    chai.expect(result).to.equal('OK');
    done();
  });
});
