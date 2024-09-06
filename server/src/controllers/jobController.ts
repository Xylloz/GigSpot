import { Request, Response } from "express";
import { IJob, Job } from "../models/jobModel";

export const jobController = {
  createJob: async (req: Request, res: Response) => {
    try {
      const newJob: IJob = new Job(req.body);
      const savedJob = await newJob.save();

      return res.status(201).json({ savedJob });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  fetchJobs: async (req: Request, res: Response) => {
    try {
      const jobs = await Job.find();
      return res.status(200).json({ jobs });
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  fetchJobById: async (req: Request, res: Response) => {
    try {
      const job = await Job.findById(req.params.id);
      if (!job) return res.status(404).json({ message: "Job not found" });

      return res.status(200).json({ job });
    } catch (err) {
      return res.status(400).json(err);
    }
  },

  deleteJob: async (req: Request, res: Response) => {
    try {
      const job = await Job.findByIdAndDelete(req.params.id);
      if (!job) return res.status(404).json({ message: "Job not found" });

      return res.status(200).json({ job });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  updateJob: async (req: Request, res: Response) => {
    try {
      const job = await Job.findByIdAndUpdate(req.params.id, req.body);
      if (!job) return res.status(404).json({ message: "Job not found" });

      return res.status(200).json({ job });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
