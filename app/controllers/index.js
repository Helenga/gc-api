const signupRequest = require('./signupRequestController');
const signup = require('./signupController');
const signin = require('./signinController');

const adminAuth = require('./admin/authController');
const adminGetRequests = require('./admin/getRequestsController');
const adminGetRequest = require('./admin/getRequestController');
const adminUpdateRequestStatus = require('./admin/updateRequestStatusController');

controllers = {
  signupRequest,
  signup,
  signin,

  admin: {
    auth: adminAuth,
    getRequest: adminGetRequest,
    getRequests: adminGetRequests,
    updateRequestStatus: adminUpdateRequestStatus
  }
}

module.exports = controllers