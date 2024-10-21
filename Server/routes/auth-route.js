const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controllers");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware");

router.route("/").get(authControllers.home);
router
.route("/register").post(validate(signupSchema), authControllers.register);

<<<<<<< HEAD
router.route("/login").post(validate(loginSchema), authControllers.login);
=======
router.route("/login").post(validate(loginSchema) , authControllers.login);

router.route("/updateProfile").put(authMiddleware, authControllers.UpdateProfile);
>>>>>>> eb4a2f6 (backend profile updation change)

router.route("/user").get(authMiddleware, authControllers.user);


module.exports = router;