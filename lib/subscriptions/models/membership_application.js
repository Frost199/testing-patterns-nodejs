const _ = require('underscore')._;
const moment = require('moment');

class MembershipApplication {
  constructor(args) {
    args || (args = {});
    _.extend(this, args);
    this.validUntilDate = this.validUntil ?
      moment(this.validUntil) :
      moment().add(10, 'days');
  }

  expired = () => this.validUntilDate.isBefore(moment());

  emailIsValid = () => this.email && this.email.length > 3 && this.email.indexOf('@') > -1;

  heightIsValid = () => this.height && this.height > 60 && this.height < 75;

  ageIsValid = () => this.age && this.age < 100 && this.age > 15;

  weightIsValid = () => this.weight && this.weight > 100 && this.weight < 300;

  nameIsValid = () => this.first && this.last;

  isValid = () =>
    this.emailIsValid() &&
    this.heightIsValid() &&
    this.ageIsValid() &&
    this.weightIsValid() &&
    this.expired();
}

module.exports = MembershipApplication;
