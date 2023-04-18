import React, { useState } from 'react';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {

    const [open , setOpen] = useState(false);

    return (
         <div className='md:flex justify-between md:sticky top-0 bg-slate-200 p-8'>
            <h2 className='mr-10 font-extrabold text-3xl'>JOB FINDER</h2>
            <nav>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>{open === true ? 
                        <XMarkIcon className="h-6 w-6 text-black-300" /> : <Bars3Icon className="h-6 w-6 text-black-300" />}
                    </span>
                </div>

               <ul>
                <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink  to='/statistics'>Statistics</ActiveLink>
                    <ActiveLink  to='/appliedJob'>Applied Jobs</ActiveLink>
                    <ActiveLink  to='/blog'>Blog</ActiveLink>
               </ul>
            </nav>
            <button className="btn btn-active btn-color rounded">Star Applying</button>
         </div>
    );
};

export default Header;