const KoaRouter = require('koa-router');
const router = new KoaRouter();

const signupController = require('./controllers/signup');

router.post('/signup', signupController.signup)

module.exports = router