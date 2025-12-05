import express from "express";
import {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  getSingleUser,
} from "../controller/user.js";

const router = express.Router();

// Routes
router.post("/create", createUser);
router.get("/read", readUsers);
router.get("/read/:id", getSingleUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

export default router;
