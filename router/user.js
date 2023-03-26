const express = require("express");
const router = express.Router();
const User = require("../model/User.js");
const { compress, decompress } = require("shrink-string");

let id = 1;

const rawtext =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

router.post("/", async (req, res) => {
  try {
    req.setTimeout(5000, function () {
      res.send(408);
    });
    next();
    // const chnpsend(JSON.stringify(check2));
  } catch (e) {
    res.json(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const body = await compress(rawtext);
    res.writeHead(200, { "content-encoding": "gzip" });
    res.write(body);
    res.end();
  } catch (e) {
    res.json(e);
  }
});

router.get("/checkaccount", async (req, res) => {
  try {
    console.log("request went to server ", id);
    id += 1;
    const check = await User.findOne({ account: req.query.account });
    res.json(check);
  } catch (e) {
    res.json(e);
  }
});

module.exports = router;
