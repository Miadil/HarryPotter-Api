const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  // All spell
  console.log("je suis la ")
  const housesimg = require("../assets/json/housesimg.json")
  res.status(200).json(housesimg)
})
// spell by id in progress
// router.get("/:id", (req, res) => {
//   const { id } = req.params
//   const spell = require(`../assets/json/spell/id/${id}.json`)
//   res.status(200).json(spell)
// })

module.exports = router
