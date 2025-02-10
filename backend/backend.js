const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  console.log("Received email request:", req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "njogucollins10397@gmail.com", // Your Gmail
      pass: "ggjy jgja xfys pmfv", // Generate an App Password (DO NOT use your main password)
    },
  });

  const mailOptions = {
    from: `${name} `,
    to: "njogucollins10397@gmail.com", // Your Gmail
    subject: `New message from ${name} /n Email: ${email}`,
    message: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: "Failed to send email. Try again later." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
