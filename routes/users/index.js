const express = require("express");
const router = express.Router();

//CRUD
router.get("/get_users", (req, res) => {
  res.send("get_users");
});
router.post("/post_users", (req, res) => {
  res.send("post_users");
});
router.put("/put_users", (req, res) => {
  res.send("put_users");
});
router.delete("/delete_users", (req, res) => {
  res.send("delete_users");
});

module.exports = router;
