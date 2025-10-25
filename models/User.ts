import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: false },
  image: { type: String, required: false },
  designation: { type: String, required: false },
  department: { type: String, required: false },
  division: { type: String, required: false },
  zone: { type: String, required: false },
  address: { type: String, required: false },
  phoneNumber: { type: String, required: false },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
