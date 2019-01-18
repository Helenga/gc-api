const controllers = require('../controllers/index');
const router = require('./index');

router.post('/signup/request', controllers.signupRequest)

module.exports = router