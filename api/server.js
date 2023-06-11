const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const cors = require("cors");

// const Blog = require("./models/Blog.js");
const ContactForm = require("./models/ContactForm");

const { body, validationResult } = require("express-validator");

const port = process.env.PORT || 4000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.post(
  "/submitContactForm",
  [
    body("name").isString().withMessage("Name must be a string"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("message")
      .isLength({ min: 5 })
      .withMessage("Message must be at least 5 characters long"),
  ],
  async (req, res) => {
    const { name, email, message } = req.body;

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      //New Form
      const form = new ContactForm({
        name,
        email,
        message,
      });
      await form.save();
      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error Submitting the Form" });
    }
  }
);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
