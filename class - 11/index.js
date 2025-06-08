import express from "express";
import cors from "cors";
// const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

const tempDB = [
  {
    email: "abc@gmail.com",
    password: "12345",
  },
];

const findUser = (email) => {
  return tempDB.find((user) => user.email == email);
};

//Custom middleware to check for email and password
const emailCheck = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  next();
};

const passwordCheck = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      message: "Password is required",
    });
  }

  next();
};

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, World!",
  });
});

app.post("/signup", [emailCheck, passwordCheck], (req, res) => {
  const { email, password } = req.body;

  const existingUser = findUser(email);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const newUser = {
    email,
    password,
  };

  tempDB.push(newUser);

  return res.status(201).json({
    message: "User created successfully",
    tempDB,
  });
});

app.post("/login", [emailCheck, passwordCheck], (req, res) => {
  const { email, password } = req.body;

  const existingUser = findUser(email);

  if (!existingUser) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  let passwordCheck = existingUser.password === password;

  if (!passwordCheck) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  return res.status(200).json({
    message: "Login successful",
    user: existingUser,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
