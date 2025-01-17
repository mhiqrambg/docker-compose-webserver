const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const pool = require("./src/config/db");

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files (index.html, CSS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Endpoint untuk memeriksa status koneksi database
app.get("/status", async (req, res) => {
  try {
    // Jalankan query sederhana untuk memeriksa koneksi
    await pool.query("SELECT 1");
    res.json({ message: "Terhubung ke database" });
  } catch (err) {
    console.error("Gagal terhubung ke database:", err.message);
    res.status(500).json({ message: "Gagal terhubung ke database" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Jalankan server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
