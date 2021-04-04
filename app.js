const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(express.static("client/build"));

const ticketSchema = new mongoose.Schema({
  _id: String,
  title: String,
  content: String,
  userEmail: String,
  done: Boolean,
  creationTime: Date,
  labels: Array,
});

const Ticket = mongoose.model("Ticket", ticketSchema);

app.get("/", (req, res) => {
  res.sendFile("client/public/index.html");
});

app.get("/api/tickets", async (req, res) => {
  let searchText = req.query.searchText;
  try {
    Ticket.find({}).then((result) => {
      let arr = result;
      if (searchText) {
        arr = result.filter((ticket) =>
          ticket.title.toLowerCase().includes(searchText.toLowerCase())
        );
      }
      res.json(arr);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error ocurred: ", error: error.message });
  }
});

app.patch("/api/tickets/:ticketId/done", async (req, res) => {
  let { ticketId } = req.params;
  console.log(ticketId);
  try {
    await Ticket.findOneAndUpdate(ticketId, { done: true });
    return res.json({ updated: true });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

app.patch("/api/tickets/:ticketId/undone", async (req, res) => {
  let { ticketId } = req.params;
  console.log(ticketId);
  try {
    await Ticket.findOneAndUpdate(ticketId, { done: false });
    return res.json({ updated: true });
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

module.exports = app;
