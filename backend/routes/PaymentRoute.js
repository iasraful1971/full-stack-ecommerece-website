const express = require("express");
const { Payment, sendStripeApiKey } = require("../controllers/PaymentController.js");
const { isAuthenticatedUser } = require("../middleware/Auth.js");
const router = express.Router();


router.route("/payment/process").post(isAuthenticatedUser, Payment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);


module.exports = router;