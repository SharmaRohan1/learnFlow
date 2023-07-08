const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),

  (req, res) => {

    //the user is passed by passport since its run on every incoming request
    const user = req.user;

    //for first time users, the role isn't set so sign up, select your role
    if (user.role !== 0 || user.role !== 1) {
      return res.redirect("/signup");
    }

    //returning user logged in
    res.redirect("/dashboard");
  }
);

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router;
