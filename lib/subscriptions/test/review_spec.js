const assert = require('assert');
const { reviewProcess } = require('../processes/review-path');
const { MembershipApplication } = require('../models/membership_application');
const sinon = require('sinon');

describe('The review process', () => {
  describe('Receiving a valid application', () => {
    let decision;
    const validApp = new MembershipApplication(
        {
          first: 'Test',
          last: 'User',
          email: 'test@teast.vm',
          age: 30,
          height: 66,
          weight: 180,
          validUntil: Date.parse('07/11/2020'),
        });

    const review = reviewProcess();
    const validationSpy = sinon.spy();
    const missionSpy = sinon.spy();
    const roleAvailableSpy = sinon.spy();
    const roleCompatibleSpy = sinon.spy();
    before((done) => {
      review.on('validated', validationSpy);
      review.on('mission-selected', missionSpy);
      review.on('role-available', roleAvailableSpy);
      review.on('role-compatible', roleCompatibleSpy);
      review.processApplication(validApp, (err, result) => {
        decision = result;
        done();
      });
    });

    it('returns success', () => {
      assert(decision.success, decision.message);
    });
    it('ensures the application is valid', () => {
      assert(validationSpy.called);
    });
    it('selects a mission', () => {
      assert(missionSpy.called);
    });
    it('ensures a role exists', () => {
      assert(roleAvailableSpy.called);
    });
    it('ensures role compatibility', () => {
      assert(roleCompatibleSpy.called);
    });
  });
});
