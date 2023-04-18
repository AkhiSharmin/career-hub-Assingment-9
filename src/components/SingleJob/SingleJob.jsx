import React from 'react';
import './SingleJob.css'
import { Link } from 'react-router-dom';
const SingleJob = ({job}) => {
    // console.log(job);
    const {id, image, jobTitle, companyName, jobType1, jobType2, location, salary} = job;

    console.log(id);
    return (
        <div className='p-4 bg-gray-300 border border-sky-300 bg pb-10'>
            <img className='inline-block h-32 w-36' src={image} alt="" />
            <h5 className='text-black font-semibold'>{jobTitle}</h5>
            <p className='my-2'>{companyName}</p>
            <div className='flex gap-5'>
                <p className='border-solid border-2 border-indigo-400 px-2'>{jobType1}</p>
                <p className='border-solid border-2 border-indigo-400 px-2'>{jobType2}</p>
            </div>
            <div className='flex my-3 gap-3'>
                <p><small>{location}</small></p>
                <p><small>Salary: {salary}</small></p>
            </div>
            <Link to={`/ShowDetails/${id}`}><button className="btn btn-active rounded-md my-2 btn-color">View Details</button></Link>
        </div>
    );
};

export default SingleJob;