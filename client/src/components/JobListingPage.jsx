import React, { useState, useEffect } from 'react';
import JobListing from './JobListing';
import SearchFilter from './SearchFilter';


const JobListingPage =()=>{
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(()=>{
      const getJobs = async ()=>{
        try{
          const response = await fetch('/api/jobs/');
          const data = await response.json();
          console.log('data=====>',data)
          setJobs(data.jobs)
          setFilteredJobs(data.jobs)
        } catch (error){
          console.error('Error fetching jobs:', error)
        }
      }
      getJobs()
    },[])
   
 

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
      <div>
        <p className="box-border hover:box-content bg-gradient-to-br from-indigo-600 to-pink-500 text-white px-10 my-3 font-bold text-5xl">Job Listings</p>
        <div className='job-listing-page m-3'>
          <SearchFilter onSearch={handleSearch} onFilter={handleFilter} />
          <ul className='job-listings'>
          {filteredJobs.map((job,index)=>(
          <JobListing key={index} job={job} index={index}/>
          ))}</ul>
        </div>
      </div>
        
    )
}

export default JobListingPage