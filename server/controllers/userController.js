import { errorHandler } from "../utils/error.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

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

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    var user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      var token = generateToken(res, user._id);
    } else {
      next(errorHandler(400, "Invalid user data"));
    }
    user = user.toObject();
    delete user.password;
    res.json({ user, token });
  } catch (error) {
    next(error);
  }
};
const logoutUser = (req, res, next) => {
  res.cookie("access_token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.json({ message: "user log out" });
};
const allUser = async (req, res) => {
  const users = await User.find();

  res.json(users);
};
const friendrequest = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;

    const friend = await User.findOne({ _id: friendId });
    if (!friend) next(errorHandler(404, "user not found"));
    else {
      friend.friendRequests.push(userId);
    }
    await friend.save();

    res.json({ message: "add friend" });
  } catch (error) {
    next(error);
  }
};
const acceptRequest = async (req, res, next) => {
  const userId = req.params.userId;
  const friendId = req.params.friendId;
  try {
    const user = await User.findOne({ _id: userId });
    const friend = await User.findOne({ _id: friendId });

    if (friend.friends.includes(userId)) {
      next(errorHandler(400, "already friends"));
    } else {
      if (friend.friendRequests.includes(userId)) {
        next(errorHandler(400, "already requested"));
      } else {
        user.friendRequests = user.friendRequests.filter(
          (id) => id.toString() != friendId.toString()
        );
        user.friends.push(friendId);
        friend.friends.push(userId);
      }
    }
    const mutual = user.friends.filter((f) =>
      friend.friends.includes(f.toString())
    );
    user.mutualFriends.push(...mutual);
    friend.mutualFriends.push(...mutual);
    await Promise.all([user.save(), friend.save()]);
  } catch (error) {
    next(error);
  }
};
const unfriend = async (req, res, next) => {
  const userId = req.params.userId;
  const friendId = req.params.friendId;
  try {
    const user = await User.find({ userId });
    const friend = await User.find({ friendId });

    user.friends = user.friends.filter((id) => id.toString() != friendId);
    friend.friends = friend.friends.filter((id) => id.toString() != userId);

    await Promise.all([user.save(), friend.save()]);

    res.json({ message: "remove friend" });
  } catch (error) {
    next(error);
  }
};
export {
  registerUser,
  loginUser,
  logoutUser,
  allUser,
  friendrequest,
  unfriend,
  acceptRequest,
};
