const _ = require('underscore')._;
class MembershipApplication {
  constructor(args) {
    _.extend(this, args);
  }

  emailIsValid = () => this.email && this.email.length > 3 && this.email.indexOf('@') > -1;

  heightIsValid = () => this.height && this.height > 60 && this.height < 75;

  ageIsValid = () => this.age && this.age < 100 && this.age > 15;

  weightIsValid = () => this.weight && this.weight > 100 && this.weight < 300;

  isValid = () =>
    this.emailIsValid() &&
    this.heightIsValid() &&
    this.ageIsValid() &&
    this.weightIsValid();
}

module.exports = MembershipApplication;
