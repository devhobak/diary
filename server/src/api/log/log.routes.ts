import { Router } from "express";
import * as Controller from "./log.controller";

const router = Router();

router.route("/").post(Controller.addLog);
router.route("/:user_id/day/:day").get(Controller.getLogByDay);
router.route("/:user_id/date").get(Controller.getLogByMonth);
router.route("/:id").post(Controller.updateLogById);
export default router;
