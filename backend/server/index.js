const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB (local or Atlas)
mongoose.connect("mongodb://127.0.0.1:27017/NGOConnect", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ Mongo error:", err));

// ✅ Create Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model("Contact", contactSchema);

// ✅ API endpoint to save data
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.json({ message: "Contact saved successfully!" });
  } catch (error) {
    console.error("Save error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Run server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
