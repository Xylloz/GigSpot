import { Request, Response } from "express";

export const fetchJobs = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "fetchJobs success" });
  } catch (err) {
    return res.status(500).json({ message: "fetchJobs failed" });
  }
};

export const postJob = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "googleLogin successful!" });
  } catch (err) {
    return res.status(500).json({ message: "googleLogin failed", err });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "googleLogin successful!" });
  } catch (err) {
    return res.status(500).json({ message: "googleLogin failed", err });
  }
};

export const editJob = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "googleLogin successful!" });
  } catch (err) {
    return res.status(500).json({ message: "googleLogin failed", err });
  }
};
