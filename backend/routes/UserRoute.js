const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  userDetails,
  updateUserPassword,
  updateProfile,
  getAllUsers,
  getSingleUserDetails,
  updateUserRole,
  deleteUser
} = require("../controllers/UserController.js");
const { isAuthenticatedUser, authorizedRole } = require("../middleware/Auth.js");
const router = express.Router();

router.route("/registration").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/password/forgot").post(forgotPassword);


router.route("/password/reset/:token").put(resetPassword);
router.route("/me").get(isAuthenticatedUser, userDetails);
router.route("/me/update").put(isAuthenticatedUser, updateUserPassword);
router.route("/me/update/info").put(isAuthenticatedUser, updateProfile);


router.route("/admin/users").get(isAuthenticatedUser, authorizedRole("admin"), getAllUsers);
router.route("/admin/user/:id").get(isAuthenticatedUser, authorizedRole("admin"), getSingleUserDetails);
router.route("/admin/user/:id").put(isAuthenticatedUser, authorizedRole("admin"), updateUserRole);
router.route("/admin/user/:id").delete(isAuthenticatedUser, authorizedRole("admin"), deleteUser);

module.exports = router;
