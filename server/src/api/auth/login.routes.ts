import { Router } from "express";
import passport from "passport";
const router = Router();

router.route("/login").post(passport.authenticate("local"), (req, res) => {
  res.send("success");
});

// router.route("/logout", async (req, res, next) => {
// 	req.logout((err) => {
// 		req.session.destroy();
// 		if (err) {
// 			res.redirect("/");
// 		} else {
// 			res.status(200).send("server ok: 로그아웃 완료");
// 		}
// 	});
// });

// router.route("/logout").get((req, res) => {
//   req.logout();
//   res.send("suceess");
// })
export default router;
