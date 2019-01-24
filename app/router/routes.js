const controllers = require('../controllers/index');
const router = require('./index');

router.post('/signup/request', controllers.signupRequest)
// router.post('/signup', controllers.signup)
// router.post('/signin', controllers.signin)

// // ADMIN
router.post('/admin/auth', controllers.admin.auth)
router.get('/admin/requests', controllers.admin.getRequests)
// router.get('/admin/requests/:id', controllers.admin.getRequest)
// router.put('/admin/requests/:id', controllers.admin.updateRequestStatus)

module.exports = router