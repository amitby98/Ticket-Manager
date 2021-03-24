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

app.get("/api/tickets", async (req, res) => {
  let searchText = req.query.searchText;
  try {
    let arr = [];
    Ticket.find({}).then((result) => {
      for (let ticket of result) {
        if (searchText) {
          if (ticket.title.includes(searchText)) {
            arr.push(ticket);
          }
        } else {
          res.json(result);
        }
      }
      res.json(arr);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error ocurred: ", error: error.message });
  }
});

module.exports = app;
