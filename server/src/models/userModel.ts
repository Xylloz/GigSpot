import mongoose, { Document, Schema } from "mongoose";

interface IUserBase extends Document {
  email: string;
  password: string;
  name: string;
  accountType: "Employer" | "Contractor";
  phoneNumber: string;
  profilePicture?: string;
  location: string;
  createdAt: Date;
  lastActive: Date;
}

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    accountType: {
      type: String,
      required: true,
      enum: ["Employer", "Contractor"],
    },
    phoneNumber: { type: String, required: true },
    profilePicture: { type: String },
    location: { type: String, required: true },
    joinDate: { type: Date, default: Date.now },
    lastActive: { type: Date, default: Date.now },
  },
  { timestamps: true, discriminiatorKey: "accountType" }
);

const UserBase = mongoose.model<IUserBase>("User", userSchema);

// Employer Interface and Schema
interface IEmployer extends IUserBase {
  company?: string; // Optional Company Representation
  totalSpent: number; // Cash spent on platform
  jobsPosted: number;
  activeJobs: mongoose.Types.ObjectId[];
  completedJobs: mongoose.Types.ObjectId[];
}

const Employer = UserBase.discriminator<IEmployer>(
  "Employer",
  new Schema({
    company: { type: String },
    totalSpent: { type: Number, default: 0 },
    jobsPosted: { type: Number, default: 0 },
    activeJobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
    completedJobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
  })
);

// Contractor Interface and Schema
interface IContractor extends IUserBase {
  skills: string[];
  experience: "Apprentice" | "Intermediate" | "Expert";
  hourlyRate: number;
  totalEarned: number;
  jobsCompleted: number;
  activeJobs: mongoose.Types.ObjectId[];
  portfolio?: string[]; // Optional photo portfolio
  rating: number; // 5 Star Rating system
}

const Contractor = UserBase.discriminator<IContractor>(
  "Contractor",
  new Schema({
    skills: { type: [String], required: true },
    experience: {
      type: String,
      enum: ["Apprentice", "Intermediate", "Expert"],
      required: true,
    },
    hourlyRate: { type: Number, required: true },
    totalEarned: { type: Number, default: 0 },
    jobsCompleted: { type: Number, default: 0 },
    currentJobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
    portfolio: [String],
    rating: { type: Number, default: 0, min: 0, max: 5 },
  })
);

export { Contractor, Employer, IContractor, IEmployer, IUserBase, UserBase };
