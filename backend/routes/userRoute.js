import express from "express"
import {
    logout,
    forgotPassword,
    loginUser,
    registerUser,
    resetPassword
} from "../controllers/userControlller.js"
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

export default router;