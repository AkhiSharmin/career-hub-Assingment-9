import { useState } from 'react';
import SingleJob from '../SingleJob/SingleJob';


const FeaturedJob = ({featuredJobs}) => {

//   const jobListings = useLoaderData();
//   console.log(jobListings);

 const [showAll, setShowAll] = useState(true);


    return (
        <div>
            <div className='grid grid-cols-2 gap-5 justify-center items-center'>
            {
               showAll ?  featuredJobs.slice(0,4).map(job => <SingleJob job={job} key={job.id}></SingleJob>) :  featuredJobs.map(job => <SingleJob job={job} key={job.id}></SingleJob>)
            }
            
            </div>
            <div className='text-center my-10'>
                {
                showAll ? <button className='btn btn-active rounded-md my-2 btn-color' onClick={() => setShowAll(false)}>Show All</button> : <button className='btn btn-active rounded-md my-2 btn-color' onClick={() => setShowAll(true)}>Show Less</button>
                }
            </div>
        </div>
    );
};

export default FeaturedJob;