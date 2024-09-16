import { Router } from "express";
import {
  allUser,
  loginUser,
  logoutUser,
  registerUser,
  friendRequest,
} from "../controllers/userController";
import protect from "../middleware/auth";

const router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/users", allUser);
router.put("/friendrequest/:userId/:friendId", protect, friendRequest);
router.put("/unfriend/:userId/:friendId", protect, unfriend);
router.put("/acceptrequest/:userId/:friendId", protect, acceptRequest);

export default router;
