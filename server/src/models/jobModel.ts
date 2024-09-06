import mongoose, { Document, Schema } from "mongoose";

// Employer Job Postings
interface IJob extends Document {
  employer: mongoose.Types.ObjectId;
  title: string;
  description: string;
  category: string; // Can be changed to array of categories
  location: string;
  budget: {
    type: "Fixed" | "Hourly";
    amount: number;
  };
  requiredSkills: string[];
  experienceLevel: "Apprentice" | "Intermediate" | "Expert";
  datePosted: Date;
  status: "Open" | "In Progress" | "Completed" | "Cancelled";
  applicants: mongoose.Types.ObjectId[];
  hiredContractor?: mongoose.Types.ObjectId;
}

const JobSchema = new mongoose.Schema({
  employer: { type: Schema.Types.ObjectId, ref: 'User', required: false }, // required to false until there are User entries to test
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  location: { type: String, required: true },
  budget: {
    type: { type: String, enum: ["Fixed", "Hourly"], required: true },
    amount: { type: Number, required: true },
  },
  requiredSkills: { type: [String], required: true },
  experienceLevel: {
    type: String,
    enum: ["Apprentice", "Intermediate", "Expert"],
    required: true,
  },
  datePosted: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Open", "In Progress", "Completed", "Cancelled"],
    required: true,
  },
  applicants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  hiredContractor: { type: Schema.Types.ObjectId, ref: "User" }, // Picked from applicants
});

const Job = mongoose.model<IJob>("Job", JobSchema);

export { IJob, Job };