import express from "express";

const app = express();

app.get("/", (req, res) => res.send("<h1>Express with HTML</h1>"));

app.listen(3000);
console.log("Server on Port 3000");
