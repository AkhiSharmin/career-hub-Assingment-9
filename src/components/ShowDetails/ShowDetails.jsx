import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { addToJobData } from '../../localDb/localDb';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '../Footer/Footer';

const ShowDetails = () => {

    const jobData = useLoaderData();
    const {id} = useParams();
    
    // console.log();

    const jobDetailsData = jobData.find(item => item.id === id);
    // console.log(jobDetailsData);
    const { jobDescription, jobResponsibilities, educationRequirements, experience, salary, jobTitle, phoneNumber, email, location } = jobDetailsData;


    const handelApplyNow = (id) => {
        alert(`${id} added`)
        addToJobData(id)
        // notify()
    }

    // const notify = () => toast("Wow so easy!");


    return (

        <div>
            <h2 className='text-3xl text-black my-10 font-bold text-center'>JOB DETAILS</h2>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 sm:p-4 my-14'>
            <div className='mr-8'>
                <p className='my-5'><span className='font-bold'>Job Description:</span><small>{jobDescription}</small></p>
                <p className='my-3'><span className='font-bold'>Job Responsibility:</span> <small>{jobResponsibilities}</small></p>
                <p className='font-bold my-2'>Education Requirements:</p>{educationRequirements}
                <p className='font-bold my-2'>Experience: </p>{experience}
            </div>
            <div className='bg-slate-200 sm:w-full lg:w-96 border-4 border-blue-200 shadow-2xl p-5'>
                <h2 className='text-xl font-bold my-4'>Job Details</h2>
                <p><span className='font-bold'>Salary: </span><span>{salary}</span></p>
                <p className='pb-3'><span className='font-bold my-2'>Job Title:</span>{jobTitle}</p>
                <h2 className='font-bold'>Contact Information</h2>
                <p><span className='font-bold'>Phone:</span>{phoneNumber}</p>
                <p className='mt-3'><span className='font-bold'>Email:</span> {email}</p>
                <p className='pb-4'><span className='font-bold my-4'>Address:</span> {location}</p>
                <Link to={`/appliedJob`}><button onClick={()=>handelApplyNow(id)} className="btn btn-active rounded-md my-4 btn-color">Apply Now</button></Link>
                <ToastContainer />
            </div>
        </div>
        <Footer></Footer>
        </div>
    );

};

export default ShowDetails;