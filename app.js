const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Hello From Docker")
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server Started On Port", PORT);
})