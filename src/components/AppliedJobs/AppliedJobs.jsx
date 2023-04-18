import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ApplyJob from '../ApplyJob/ApplyJob';

const AppliedJobs = () => {
    
    const jobData = useLoaderData()
    
    const [job, setJob] = useState(jobData); 

    // console.log(jobData)

    const handelJob = (jobType) =>{
        const newJobData = jobData.filter(job => job.jobType1 === jobType);
        setJob(newJobData);
    }



    return (
        <div>
            <h2 className='text-2xl font-bold text-center'>Applied Jobs :{jobData.length}</h2>

            <div>
            <div className='text-end'>
                <button onClick={()=>handelJob('Onside')} className='btn btn-active rounded-md my-2 btn-color mr-5'>OnSide</button>
                <button onClick={() => handelJob('Remote')} className='btn btn-active rounded-md my-2 btn-color'>Remote</button>
            </div>
                {
                    job.map(myJob => <ApplyJob myJob={myJob} key={myJob.id}></ApplyJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;