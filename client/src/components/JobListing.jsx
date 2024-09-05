import React from 'react';

const JobListing = ({job})=>{
    return(
        
        <li
        className="p-5 border-gray-400 rounded-xl my-6 bg-slate-100"
      >
            <p className="job-title text-3xl">{job.title}</p>
            <p>Offer: ${job.offer}/hour</p>
            <p>Posted by: {job.poster}</p>
            <p>Location: {job.location}</p>
            <p>Date: {job.date}</p>
            <button className=" my-2 rounded-lg bg-blue-950 text-white hover:bg-blue-400 " onClick={()=> alert(`You have just applied for ${job.title}`)}> Apply </button>
        
            </li>
     
    )
}

export default JobListing;