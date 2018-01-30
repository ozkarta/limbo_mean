module.exports = function (express) {
  var router = express.Router();
  var passport = require('passport');

  router.use(passport.initialize());
  router.use(passport.session());

  // Controllers
  let userController = require('../components/user/user.controller')(express);


  // Routes
  router.use('/users', userController);

  return router;
};
