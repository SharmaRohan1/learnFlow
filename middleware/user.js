const ensureCreator = (req, res, next) => {
  const user = req.user;
  if (user.role === 0) return next();
  res.redirect("/dashboard");
};

const ensureStudent = (req, res, next) => {
  const user = req.user;
  if (user.role === 1) return next();
  res.redirect("/dashboard");
};


//ensures that the user selected a role and didn't leave the sign up process in the middle
const ensureSignUp = (req, res, next) => {
  const user = req.user;
  if (user.role === 0 || user.role === 1) {
    return next();
  }
  res.redirect("/signup");
};

const ensureNewUser = (req, res, next) => {
  const user = req.user;
  if (user.role === 0 || user.role === 1) {
    return res.redirect("/dashboard");
  }
  next();
};

module.exports = {
  ensureCreator,
  ensureNewUser,
  ensureStudent,
  ensureSignUp,
};
