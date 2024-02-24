const express = require("express");
const Event = require("../models/event");
const router = express.Router();
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const morgan = require("morgan");
const User = require("../models/user");

// Create new event
router.post("/create", async (req, res, next) => {
  const event = new Event({
    _id: new mongodb.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    img: req.body.img,
    link: req.body.link,
    location: req.body.location,
    date: new Date(req.body.date),
    duration: req.body.duration,
    organization: req.body.organization,
  });
  try {
    const savedData = await event.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Find event by id and delete
router.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.findByIdAndDelete(id);
    if (!event) res.send("No such event to delete");
    else res.send(`Event ${event.title} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Find event by id and update
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };

    const result = await Event.findByIdAndUpdate(id, updateData, options);
    if (!result) res.send("No such event to update");
    else res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get recent and upcoming events
router.get("/recent", async (req, res) => {
  try {
    // TODO: Add pagination for recent events. Right now, returns all events.
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get event by id and update
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.findById(id);
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Register a user to an event
router.put("/event/:id/register/:userId", async (req, res) => {
  const { id, userId } = req.params;
  try {
    // Add userId to event's participants
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { $addToSet: { participants: userId } }, // Use $addToSet to prevent duplicates
      { new: true }
    );

    // Add eventId to user's upcomingEvents
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { upcomingEvents: id } },
      { new: true }
    );

    if (!updatedEvent || !updatedUser) {
      return res.status(404).json({ message: "Event or User not found" });
    }

    res.status(200).json({
      message: "User registered to event successfully",
      event: updatedEvent,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Unregister a user from an event
router.put("/event/:id/unregister/:userId", async (req, res) => {
  const { id, userId } = req.params;
  try {
    // Remove userId from event's participants
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { $pull: { participants: userId } },
      { new: true }
    );

    // Remove eventId from user's upcomingEvents
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { upcomingEvents: id } },
      { new: true }
    );

    if (!updatedEvent || !updatedUser) {
      return res.status(404).json({ message: "Event or User not found" });
    }

    res.status(200).json({
      message: "User unregistered from event successfully",
      event: updatedEvent,
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
