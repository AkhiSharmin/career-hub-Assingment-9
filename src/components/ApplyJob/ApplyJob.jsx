import React from 'react';
import { Link } from 'react-router-dom';
import { MapIcon,MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid';

const ApplyJob = ({myJob}) => {
    // console.log(myJob)
    const {id,image, jobTitle, companyName, jobType1,jobType2, location, salary}=myJob;

    return (
        <div>
            
            <div className='p-4 mx-auto mb-4 my-3 border-2 border-indigo-200 bg sm:w-full lg:w-full flex gap-3'>
            <div>
                <img className='img-container h-60' src={image}  alt="" />
            </div>
            <div className='grow ms-10 mt-12'>
                <h2 className='font-bold'>{jobTitle}</h2>
                <h2 className='font-bold'>{companyName}</h2>
                <div className='flex gap-4'>
                    <p><button className='border border-blue-600 p-1 mt-1 text-blue-900 font-semibold'>{jobType1}</button></p>
                    <p><button className='border border-blue-600 p-1 mt-1 text-blue-900 font-semibold'>{jobType2}</button></p>
                </div>
                <div className=' w-full flex mt-2'>
                <div className='flex items-center'>
                <p><MapPinIcon className="h-4 w-4 text-slate-600"></MapPinIcon></p>
                <span className='inline-block'>{location}</span>
                </div>
                <div className='flex'>
                <p><CurrencyDollarIcon className="h-4 w-4 mt-1 text-slate-600"></CurrencyDollarIcon></p>
                <p className='ms-2'>salary: {salary}</p>
                </div>
                </div>
            </div>
            <div className='my-auto' > 
                <Link to={`/ShowDetails/${id}`}><button  className=' btn-color rounded font-bold  text-white p-2
                 hover:pointer '>ViewDetails</button></Link>
            </div>
        </div>
        </div>
    );
};

export default ApplyJob;