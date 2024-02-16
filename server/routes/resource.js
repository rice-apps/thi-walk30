const express = require("express");

const Resource = require("../models/resource");
const Organization = require("../models/organization");

const router = express.Router();

module.exports = router;

router.post("/create", async (req, res, next) => {
  try {
    const organization = await Organization.findById(req.body.organization._id);
    if (!organization) throw new Error("No such organization");
    const data = new Resource({
      title: req.body.title,
      link: req.body.link,
      img: req.body.img,
      organization: organization,
    });
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/recent", async (req, res) => {
  try {
    // TODO: Add pagination for recent resources. Right now, returns all events.
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const options = { new: true };
  try {
    updateData.organization = await Organization.findById(
      updateData.organization._id,
    );
    if (!updateData.organization) delete updateData["organization"];

    const result = await Resource.findByIdAndUpdate(id, updateData, options);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Resource.findByIdAndDelete(id);
    if (!data) throw new Error("No resource with such id");
    res.send(`Resource '${data.title}' (id ${data.id}) has been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});