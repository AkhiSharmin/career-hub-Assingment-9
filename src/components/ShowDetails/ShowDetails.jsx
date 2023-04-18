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
        
        <Footer></Footer>
        </div>
    );

};

export default ShowDetails;