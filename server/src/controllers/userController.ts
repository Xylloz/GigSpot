import { Request, Response } from "express";
import { Contractor, Employer, IContractor, IEmployer, IUserBase, UserBase } from "../models/userModel";

export const userController = {
//   createUser: async (req: Request, res: Response) => {
//     try {
//       // const {name, email, password,accountType,phoneNumber,location} = req.body
//       let newUser = req.body
//       // if (accountType === 'Employer'){
//         // newUser = new Employer({
//         //   name,
//         //   email,
//         //   password,
//         //   phoneNumber,
//         //   location,
//         // }) 
//         newUser = new Employer
//       // }else if (accountType === 'Contractor'){
//       //   // newUser = new Contractor({
//       //   //   name, email,password, phoneNumber,location, 
//       //   //   skills: [],
//       //   //   experience: 'Apprentice',
//       //   //   hourlyRate: 0,
//       //   //   totalEarned: 0,
//       //   //   jobCompleted: 0,
//       //   //   rating:0,
//       //   // })
//       //   newUser = new Employer
//       // }
//       // else{
//       //   return res.status(400).json({error: 'Invalid account type'})
//       // }

//       await newUser.save();

//       return res.status(201).json({ message: 'User created successfully', user: newUser });
//     } catch (err) {
//       return res.status(500).json(err);
//     }
//   },

// };
createUser: async (req: Request, res: Response) => {
  try {
    console.log("Request body:", req.body); // Log the incoming request body
    
    const {name, email, password, accountType, phoneNumber, location} = req.body;

    if (!name || !email || !password || !accountType || !phoneNumber || !location) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    let newUser;
    if (accountType === 'Employer'){
      newUser = new Employer({
        name,
        email,
        password,
        phoneNumber,
        location,
        company: req.body.company,
        totalSpent: req.body.totalSpent,
        jobsPosted: req.body.jobsPosted,
        activeJobs: req.body.activeJobs,
        completedJobs: req.body.completedJobs,
        accountType: "Employer"
      });
    } else if (accountType === 'Contractor'){
      newUser = new Contractor({
        name,
        email,
        password,
        phoneNumber,
        location,
        skills: req.body.skills || [],
        experience: req.body.experience || 'Apprentice',
        hourlyRate: req.body.hourlyRate || 0,
        totalEarned: req.body.totalEarned || 0,
        jobsCompleted: req.body.jobsCompleted || 0,
        rating: req.body.rating || 0,
        accountType: "Contractor"
      });
    } else {
      return res.status(400).json({error: 'Invalid account type'});
    }

    await newUser.save();

    return res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    console.error("Error creating user:", err); // Log the error
    return res.status(500).json(err);
  }
},
}