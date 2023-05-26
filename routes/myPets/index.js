const express = require("express");
const router = express.Router();
const {ashley} = require("../../models");
//CRUD
router.get("/get_pets", (req, res) => {
  res.send("/get_pets");
});

router.post("/post_pets", async (req, res) => {
  const name = req.body.name;
  const newUser = await ashley.create({
    name: name,
  });
});

router.put("/put_pets", (req, res) => {
  res.send("/get_pets");
});
router.delete("/delete_pets/:id", (req, res) => {
  const id = req.params.id
    res.send("/delete_pets");
});

module.exports = router;
