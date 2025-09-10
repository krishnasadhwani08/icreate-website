import express from "express";
import User from "../models/User.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { name, email, department, year } = req.body;
    const newUser = new User({ name, email, department, year });
    await newUser.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
