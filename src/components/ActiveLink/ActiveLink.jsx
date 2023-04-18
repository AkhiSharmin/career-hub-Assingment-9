import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';


const ActiveLink = ({to, children}) => {
    return (
        <NavLink
                to={to}
                className={ ({ isActive }) => `mr-10 font-semibold text-2xl ${isActive? "active": " " }` }>
                {children}
        </NavLink>
    );
};

export default ActiveLink;