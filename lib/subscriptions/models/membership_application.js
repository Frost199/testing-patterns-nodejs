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

  validationMessage = () => {
    if (this.isValid()) return 'Application is valid';
    else if (!this.emailIsValid()) return 'Email is invalid';
    else if (!this.ageIsValid()) return 'Age is outside our limits of 115 to 100 years';
    else if (!this.heightIsValid()) return 'Height is outside our limits of 60 to 75 inches';
    else if (!this.weightIsValid()) return 'Wight is outside our limits of 100 to 300 kg';
    else if (!this.nameIsValid()) return 'A first and last name is required';
    else if (!this.expired()) return 'The application has expired';
  };

  isValid = () =>
    this.emailIsValid() &&
    this.heightIsValid() &&
    this.ageIsValid() &&
    this.weightIsValid() &&
    this.expired();
}

module.exports.MembershipApplication = MembershipApplication;
