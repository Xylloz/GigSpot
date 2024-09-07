import { useState } from 'react';
import { jobList } from '../../../server/src/db/jobData.ts';

const JobListing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = jobList.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 w-full border rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredJobs.map((job, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p>{job.description}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Budget:</strong> {job.budget.type} - ${job.budget.amount}</p>
            <p><strong>Experience Level:</strong> {job.experienceLevel}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <p><strong>Posted:</strong> {job.datePosted.toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;
