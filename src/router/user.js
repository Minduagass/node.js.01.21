import express from "express";
import { getUserById, insertUser, getAllUsers } from "../controller/user.js";

const router = express.Router();

router.get("/users", getAllUsers);

router.post("/users", insertUser);

router.get("/users/:id", getUserById);

export default router;
