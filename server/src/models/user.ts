import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  position: String,
  company: String,
  jobState: { type: String, default: "Interview" },
  createdAt: { type: Date, default: Date.now() },
});

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  jobs: { type: [JobSchema], default: [] },
});

const User = mongoose.model("user", UserSchema);
export const Job = mongoose.model("job", JobSchema);

export default User;
