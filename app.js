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

// app.patch("/api/tickets/:ticketId/done", async (req, res) => {
//   let ticketId = req.params.ticketId;
//   console.log(result);
//   Ticket.findByIdAndUpdate(ticketId, { $set: { done: true } })
//     .then((result) => {
//       if (!result) return res.status(404).json({ err: "cannot find ticket" });
//       return res.json({ update: true });
//     })
//     .catch((err) => {
//       if (err.name === "CastError")
//         return res.status(400).json({ err: "Invalid Id" });
//       return res.status(500).json({ err: err.message });
//     });
// });

app.patch("/api/tickets/:ticketId/done", async (req, res) => {
  let id = req.params.ticketId;
  try {
    Ticket.find({}).then((result) => {
      for (let ticket of result) {
        if (ticket._id == id) {
          console.log(ticket.done);
          let obj = ticket;
          obj.done = true;
          console.log(obj);
          Ticket.update({ _id: ObjectId(id) }, { $set: updateObject });
          res.json({ updated: true });
        }
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error ocurred: ", error: error.message });
  }
});

module.exports = app;
