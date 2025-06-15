import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import express from "express";
import cors from "cors";
// const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;
const uri =
  "mongodb+srv://vijayanandr2000:7Nj6eigw5OZqQI3s@cluster0.5xmwywf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

const tempDB = [
  {
    email: "abc@gmail.com",
    password: "12345",
  },
];

const usersCollection = client.db("loginApp").collection("users");

const findUser = async (email) => {
  // return tempDB.find((user) => user.email == email);
  return await usersCollection.findOne({
    email,
  });
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

app.post("/signup", [emailCheck, passwordCheck], async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await findUser(email);

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const newUser = {
    email,
    password,
  };

  // tempDB.push(newUser);
  const newUserId = await usersCollection.insertOne(newUser);

  return res.status(201).json({
    message: "User created successfully",
    newUserId,
  });
});

app.post("/login", [emailCheck, passwordCheck], async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await findUser(email);

  console.log("existingUser", existingUser);

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

app.delete("/user/:id", async (req, res) => {
  const userId = req.params.id;

  const objectUserId = new ObjectId(userId); //ObjectId("akjsdjsah")

  console.log({
    _id: objectUserId,
  });

  const deletedData = await usersCollection.deleteOne({
    _id: objectUserId,
  });

  if (deletedData.deletedCount > 0) {
    return res.status(200).json({
      message: "Deleted successful",
    });
  }

  return res.status(404).json({
    message: "User Not Found",
  });
});

app.put("/user", async (req, res) => {
  const userId = req.query.id;
  const { password } = req.body;
  const objectUserId = new ObjectId(userId);

  const updatedData = await usersCollection.updateOne(
    {
      _id: objectUserId,
    },
    {
      $set: {
        // password: password,
        password,
      },
    }
  );

  if (updatedData.modifiedCount > 0) {
    return res.status(200).json({
      message: "Updated successful",
    });
  }

  return res.status(404).json({
    message: "User Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  run().catch(console.log);
});
