const express = require("express");
const db = require("./service/db");
const cors = require("cors");
const router = require("./route");
const { initTable } = require("./service/db");

const app = express();
const PORT = 3003;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, async () => {
  await initTable();
  console.log(`🚀 Server running on port: ${PORT}`);
});
