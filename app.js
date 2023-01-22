const express = require("express");
const app = express();
const os = require("os");

app.use("/", async (req, res) => {
  console.log(`I am sending a response ${os.hostname()}
    `);
  res.send({
    message: "Ok it works...",
    hostname: os.hostname(),
  });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
