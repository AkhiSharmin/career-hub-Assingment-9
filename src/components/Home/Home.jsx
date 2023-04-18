import React, { useEffect, useState } from 'react';
import BannerPart from '../BannerPart/BannerPart';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
  const featuredJobsData = async () => {
    try {
      const res = await fetch("/jobListings.json");
      const data = await res.json();
      setFeaturedJobs(data);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };
  featuredJobsData();
}, []);


    return (
        <div>
            <BannerPart></BannerPart>
            <JobCategory></JobCategory>
            <FeaturedJob featuredJobs={featuredJobs}></FeaturedJob>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;