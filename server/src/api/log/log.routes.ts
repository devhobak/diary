import { Router } from "express";
import * as Controller from "./log.controller";

const router = Router();

router.route("/").post(Controller.addLog);
export default router;
