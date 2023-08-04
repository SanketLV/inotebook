const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/auth", require("./routes/auth"));
app.use("/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Sanket!");
});

app.listen(port, () => {
  console.log(`iNotebook backend is listening on port ${port}`);
});
