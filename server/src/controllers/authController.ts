import { Request, Response } from "express";

export const googleLogin = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "googleLogin successful!" });
  } catch (err) {
    return res.status(500).json({ message: "googleLogin failed", err });
  }
};
