import { Router } from "express";
import * as Controller from "./log.controller";

const router = Router();

router.route("/").post(Controller.addLog);
router.route("/:user_id/:day").get(Controller.getLogByDay);
router.route("/:user_id/month/:date").get(Controller.getLogByMonth);
export default router;