// UNAUTH
const signupRequest = require('./signupRequestController');
const signup = require('./signupController');
const signin = require('./signinController');

// USER (CELEBRITY & CUSTOMER)
const getProfile = require('./user/getProfileController');
const updateProfile = require('./user/updateProfileController');
const updatePassword = require('./user/updatePasswordController');
const updateAvatar = require('./user/updateAvatarController');

// CELEBRITY ONLY
const getOrders = require('./celebrity/getOrders');
const createVideo = require('./celebrity/createVideo');

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
    updatePassword,
    updateAvatar
  },

  customer: {

  },

  celebrity: {
    getOrders,
    createVideo
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