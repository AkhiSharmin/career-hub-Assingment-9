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
            
        </div>
    );
};

export default FeaturedJob;