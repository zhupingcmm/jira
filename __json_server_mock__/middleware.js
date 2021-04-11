module.exports = (req, res, next) => {
  console.log("anc::", req.path);
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "zp" && req.body.password === "123") {
      return res.status(200).json({
        user: {
          token: 123,
        },
      });
    } else {
      return res.status(400).json({
        message: "username or password is wrong!!!",
      });
    }
  }
  next();
};
