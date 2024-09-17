import { Router } from "express";
import {
  allUser,
  loginUser,
  logoutUser,
  registerUser,
  friendrequest,
  unfriend,
  acceptRequest,
} from "../controllers/userController.js";
import protect from "../middleware/auth.js";

const router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/users", allUser);
router.put("/friendrequest/:userId/:friendId", protect, friendrequest);
router.put("/unfriend/:userId/:friendId", protect, unfriend);
router.put("/acceptrequest/:userId/:friendId", protect, acceptRequest);

export default router;
