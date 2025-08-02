const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authControllers.home);
router
.route("/register").post(validate(signupSchema), authControllers.register);

router.route("/login").post(validate(loginSchema) , authControllers.login);

router.route("/updateProfile").put(authMiddleware, authControllers.UpdateProfile);

router.route("/updateAddress").put(authMiddleware, authControllers.UpdateAddress);


router.route("/user").get(authMiddleware, authControllers.user);

router.post("/oauth", authControllers.oauthLogin);

module.exports = router;