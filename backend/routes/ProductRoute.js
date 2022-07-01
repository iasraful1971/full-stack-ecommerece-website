const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  singleProductView,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
  getSingleProduct,
  getAdminProducts,
  getRecentProduct
} = require("../controllers/ProductController");

const express = require("express");
const { isAuthenticatedUser, authorizedRole } = require("../middleware/Auth");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/recent").get(getRecentProduct);
router.route("/product/new").post(isAuthenticatedUser , authorizedRole("admin"), createProduct);
router.route("/product/:id").put(isAuthenticatedUser , authorizedRole("admin"), updateProduct);
router.route("/product/:id").delete(isAuthenticatedUser , authorizedRole("admin"), deleteProduct);
router.route("/product/:id").get(getSingleProduct);
// reviews 
router.route("/product/review").post(isAuthenticatedUser , createProductReview);
router.route("/reviews").get( getSingleProductReviews);
router.route("/reviews").delete(isAuthenticatedUser , authorizedRole("admin") ,deleteReview);
router.route("/admin/products").get(isAuthenticatedUser , authorizedRole("admin") , getAdminProducts);


module.exports = router;
