import React, { useState } from 'react';
import JobListing from './JobListing';
import SearchFilter from './SearchFilter';


const initialJobs = [
    {
        poster: 'Mr. Smith',
        title: 'Site Cleaner',
        offer: '10',
        location: 'New York City',
        date: '28 Aug 2024',
    }
]

const JobListingPage =()=>{
    const [jobs, setJobs] = useState(initialJobs);
    const [filteredJobs, setFilteredJobs] = useState(initialJobs);


    const handleSearch = (term) => {
        const filtered = jobs.filter((job) =>
          job.title.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredJobs(filtered);
      };

      const handleFilter = (location) => {
        const filtered = jobs.filter((job) =>
          job.location.toLowerCase().includes(location.toLowerCase())
        );
        setFilteredJobs(filtered);
      };
    
    return (
        <div className='job-listing-page'>
            <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
            <div className='job-listings'>
            {filteredJobs.map((job,index)=>(
                <JobListing key={index} job={job} />
            ))}</div>
        </div>
    )
}

export default JobListingPage