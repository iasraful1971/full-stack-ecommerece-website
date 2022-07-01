const express = require("express");
const { Payment, sendStripeApiKey } = require("../controllers/PaymentController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();


router.route("/payment/process").post(isAuthenticatedUser, Payment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);


module.exports = router;