import { Router } from "express";
import {
  allUser,
  getMutualfriends,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController";
import protect from "../middleware/auth";

const router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/users", allUser);
router.get("/user/:userId", protect, getMutualfriends);

export default router;
