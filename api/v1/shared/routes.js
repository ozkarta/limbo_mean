module.exports = function (express) {
  let router = express.Router();
  let passport = require('passport');

  router.use(passport.initialize());
  router.use(passport.session());

  // Controllers
  let userController = require('../components/user/user.controller')(express);
  let imageUploadController = require('../components/upload/image-upload.conrtoller')(express);
  let defaultController = require('../components/default/default.controller')(express);

  // Routes
  router.use('/users', userController);
  router.use('/upload/image', imageUploadController);


  router.use('*', defaultController);
  return router;
};
