
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URI);

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

app.post("/contact", async (req, res) => {
  const message = new Contact(req.body);
  await message.save();
  res.json({ msg: "Saved Successfully" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
