import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return next(errorHandler(401, "Unauthorized cookie not found"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "unauthorized"));
    }
    req.user = user;
    next();
  });
};

export default protect;
