import UserModel from "../models/user.js";
import { v4 as uuid } from "uuid";

export const getAllUsers = async (req, res) => {
  const users = await UserModel.find();

  return res.json({ users: users });
};

export const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await UserModel.findOne({ id: id });

  if (!user) {
    return res.status(404).json({ message: `No user with id: ${id}` });
  }

  return res.json({ user: user });
};

export const insertUser = async (req, res) => {
  const user = new UserModel({ id: uuid(), ...req.body });
  await user.save();

  return res.status(201).json({ user: user });
};
