const assert = require('assert');
const MembershipApplication = require('../models/membership_application');

describe('Applying for a mission', () => {
  let validApp;

  before(() => {
    validApp = new MembershipApplication({
      first: 'Test',
      last: 'User',
      email: 'test@teast.vm',
      age: 30,
      height: 66,
      weight: 180,
    });
  });

  describe('Using valid email, first, last, height, weight, age', () => {
    it('is valid', () => {
      assert(validApp.isValid(), 'Not valid');
    });
    it('reports a valid email');
    it('reports a valid height');
    it('reports a valid age');
    it('reports a valid weight');
    it('reports a valid name');
  });
});
