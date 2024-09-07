import { Request, Response } from "express";
import { Contractor, Employer, IContractor, IEmployer, IUserBase, UserBase } from "../models/userModel";

export const userController = {
  createUser: async (req: Request, res: Response) => {
    try {
      const {name, email, password,accountType,phoneNumber,location} = req.body
      let newUser;
      if (accountType === 'Employer'){
        newUser = new Employer({
          name,
          email,
          password,
          phoneNumber,
          location,
        }) 
      }else if (accountType === 'Contractor'){
        newUser = new Contractor({
          name, email,password, phoneNumber,location, 
          skills: [],
          experience: 'Apprentice',
          hourlyRate: 0,
          totalEarned: 0,
          jobCompleted: 0,
          rating:0,
        })
      }else{
        return res.status(400).json({error: 'Invalid account type'})
      }

      await newUser.save();

      return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

};
