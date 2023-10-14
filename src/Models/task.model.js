import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);
