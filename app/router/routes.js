const controllers = require('../controllers/index');
const router = require('./index');

// UNAUTH
router.post('/signup/request', controllers.signupRequest)
router.post('/signup', controllers.signup)
router.post('/signin', controllers.signin)

// USER (CUSTOMER & CELEBRITY)
router.get('/user', controllers.user.getProfile)
router.put('/user', controllers.user.updateProfile)
router.put('/user/password', controllers.user.changePassword)

// CELEBRITY ONLY

// CUSTOMER ONLY

// // ADMIN
router.post('/admin/auth', controllers.admin.auth)
router.get('/admin/requests', controllers.admin.getRequests)
router.get('/admin/requests/:id', controllers.admin.getRequest)
router.put('/admin/requests/:id', controllers.admin.updateRequestStatus)
router.post('/admin/celebrities', controllers.admin.createCelebrity)

module.exports = router