import mongoose, { Schema } from "mongoose";

const toDoSchema = mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  finishDate: {
    type: Date,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  status: {
    type: String,
    enum: ["Completed", "Pending", "InProgress"],
    default: "Pending",
  },
  subDoTo: [
    {
      type: String,
      required: false,
    },
  ],
});

export default mongoose.model("ToDo", toDoSchema);
