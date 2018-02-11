module.exports = function (express) {
  let router = express.Router();
  let passport = require('passport');

  router.use(passport.initialize());
  router.use(passport.session());

  // Controllers
  let userController = require('../components/user/user.controller')(express);
  let imageUploadController = require('../components/upload/image-upload.conrtoller')(express);
  let defaultController = require('../components/default/default.controller')(express);

  // Employer Controllers
  let employerJobController = require('../components/employer/job/job.controller')(express);

  // Routes
  router.use('/users', userController);
  router.use('/upload/image', imageUploadController);

  // Employer
  router.use('/employer/jobs', employerJobController);

  router.use('*', defaultController);
  return router;
};
