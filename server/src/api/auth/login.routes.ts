import { Router } from "express";
import * as Controller from "./login.controller";
const passport = require("passport");
const router = Router();

router.route("/").post(passport.authenticate("local"));
export default router;
