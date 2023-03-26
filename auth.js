
exports.adminAuth = (req, res, next) => {
    if (req.session.user  && req.session.user.role === "admin") next()
    else res.json("U not admin")
  }
exports.userAuth = (req, res, next) => {
    if (req.session.user) next()
    else res.json("Please login first")
  }