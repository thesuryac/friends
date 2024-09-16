import { errorHandler } from "../utils/error.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password || username === "" || password === "") {
    next(errorHandler(400, "all fields are required"));
  }
  const existsUser = await User.findOne({ username });
  if (existsUser) {
    next(errorHandler(400, "user already exists"));
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const user = new User({
    username,
    password: hashPassword,
  });
  try {
    await user.save();
    res.json({ message: "signup successful" });
  } catch (error) {
    res.json(next(error));
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      generateToken(res, user._id);
      res.json({
        _id: user._id,
        username: user.username,
      });
    } else {
      next(errorHandler(400, "Invalid user data"));
    }
  } catch (error) {
    next(error);
  }
};
const logoutUser = (req, res) => {
  res.json({ message: "user log out" });
};
const allUser = (req, res) => {
  res.json({ message: "user log out" });
};
const getMutualfriends = (req, res) => {
  res.json({ message: "get mutual friends" });
};
export { registerUser, loginUser, logoutUser, allUser, getMutualfriends };
