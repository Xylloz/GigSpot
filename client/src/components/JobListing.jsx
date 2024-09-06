import React from 'react';

const JobListing = ({job})=>{
    return(
        
        <li
        className="p-5 border-gray-400 rounded-xl my-6 bg-slate-100"
      >
            <p className="job-title text-3xl">{job.title}</p>
            <p><span className='font-bold'>Budget: </span> ${job.budget.amount}/{job.budget.type}</p>
            <p><span className='font-bold'>Location: </span> {job.location}</p>
            <p><span className='font-bold'>Category: </span> {job.category}</p>
            <p><span className='font-bold'>Description: </span> {job.description}</p>
            <button className=" my-2 rounded-lg bg-blue-950 text-white hover:bg-blue-400 " onClick={()=> alert(`You have just applied for ${job.title}`)}> Apply </button>
        
            </li>
     
    )
}

export default JobListing;