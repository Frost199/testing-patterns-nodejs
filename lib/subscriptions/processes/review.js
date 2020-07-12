const Emitter = require('events').EventEmitter;

class ReviewProcess extends Emitter {
  constructor(args) {
    super();
    this.callback = null;
  }

  // make sure the application is valid
  ensureApplicationValid = (application) => {
    if (application.isValid()) this.emit('validated', application);
    else this.emit('invalid', application.validationMessage());
  };

  // find the next mission
  findNextMission = (application) => {
    application.mission = {
      commander: null,
      pilot: null,
      MAVPilot: null,
      passengers: [],
    };
    this.emit('mission-selected', application);
  };

  // make sure the role selected is available
  roleAvailable = (application) => {
    this.emit('role-available', application);
  };

  // make sure height/weight/age is right for role
  ensureRoleCompatible = (application) => {
    this.emit('role-compatible', application);
  };

  // accept the application with a message
  acceptApplication = (application) => {
    this.callback(null, {
      success: true,
      message: 'Welcome to the Jupiter program!',
    });
  };

  // accept the application with a message
  denyApplication = (message) => {
    this.callback(null, {
      success: false,
      message,
    });
  };

  processApplication = (application, next) => {
    this.callback = next;
    this.emit('application-received', application);
  };
}

module.exports.ReviewProcess = ReviewProcess;
