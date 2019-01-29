// UNAUTH
const signupRequest = require('./signupRequestController');
const signup = require('./signupController');
const signin = require('./signinController');

// USER (CELEBRITY & CUSTOMER)
const getProfile = require('./user/getProfileController');
const updateProfile = require('./user/updateProfileController');
const changePassword = require('./user/changePasswordController');

// CELEBRITY ONLY

// CUSTOMER ONLY

// ADMIN
const adminAuth = require('./admin/authController');
const adminGetRequests = require('./admin/getRequestsController');
const adminGetRequest = require('./admin/getRequestController');
const adminUpdateRequestStatus = require('./admin/updateRequestStatusController');
const adminCreateCelebrity = require('./admin/createCelebrity');

controllers = {
  signupRequest,
  signup,
  signin,

  user: {
    getProfile,
    updateProfile,
    changePassword
  },

  customer: {

  },

  celebrity: {

  },

  admin: {
    auth: adminAuth,
    getRequest: adminGetRequest,
    getRequests: adminGetRequests,
    updateRequestStatus: adminUpdateRequestStatus,
    createCelebrity: adminCreateCelebrity
  }
}

module.exports = controllers