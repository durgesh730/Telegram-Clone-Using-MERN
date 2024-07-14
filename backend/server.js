const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");

dotenv.config({ path: "./.env" });

// Connect database
mongoose
  .connect("mongodb+srv://durgeshchaudhary020401:Durgesh%402022@cluster0.r2ogr2k.mongodb.net/NanoChat")
  .then(() => console.log("Database connected..."))
  .catch((error) => console.log("An error occured..."));

// Serve client folder
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//   Listen to port
exports.expressServer = app.listen(process.env.PORT || 4000, () =>
  console.log("Listening...")
);
