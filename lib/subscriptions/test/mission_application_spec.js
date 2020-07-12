const assert = require('assert');
const { MembershipApplication } = require('../models/membership_application');

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
      validUntil: Date.parse('07/11/2020'),
    });
  });

  describe('Using valid email, first, last, height, weight, age', () => {
    it('is passed the valid until date', () => {
      assert(validApp.expired(), 'Not valid');
    });
    it('is valid', () => {
      assert(validApp.isValid(), 'Not valid');
    });
    it('reports a valid email', () => {
      assert(validApp.emailIsValid(), 'Not valid');
    });
    it('reports a valid height', () => {
      assert(validApp.heightIsValid(), 'Not valid');
    });
    it('reports a valid age', () => {
      assert(validApp.ageIsValid(), 'Not valid');
    });
    it('reports a valid weight', () => {
      assert(validApp.weightIsValid(), 'Not valid');
    });
    it('reports a valid name', () => {
      assert(validApp.nameIsValid(), 'Not valid');
    });
  });
});
