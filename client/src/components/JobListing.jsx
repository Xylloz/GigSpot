import React from 'react';

const JobListing = ({job})=>{
    return(
        <div className='job-listing'>
        <p className="job-title">{job.title}</p>
        <p>Posted by: ${job.poster}</p>
        <p>Offer: ${job.offer}/hour</p>
        <p>Location: ${job.location}</p>
        <p>Date: ${job.date}</p>
        <button onClick={()=> alert(`You have just applied for ${job.title}`)}> Apply </button>
        </div>
    )
}

export default JobListing;