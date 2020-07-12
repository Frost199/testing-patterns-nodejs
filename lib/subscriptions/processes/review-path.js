const { ReviewProcess } = require('./review');

const reviewProcess = () => {
  const applicationPath = new ReviewProcess();

  // event path success
  applicationPath.on('application-received', applicationPath.ensureApplicationValid);
  applicationPath.on('validated', applicationPath.findNextMission);
  applicationPath.on('mission-selected', applicationPath.roleAvailable);
  applicationPath.on('role-available', applicationPath.ensureRoleCompatible);
  applicationPath.on('role-compatible', applicationPath.acceptApplication);

  // fail path
  applicationPath.on('invalid', applicationPath.denyApplication);

  return applicationPath;
};

module.exports.reviewProcess = reviewProcess;
