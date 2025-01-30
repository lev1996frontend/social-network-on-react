import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <NavLink 
                to='/profile' 
                className={navData => navData.isActive ? s.active : s.item}
            >
                Profile
            </NavLink>
            <NavLink 
                to='/dialogs' 
                className={navData => navData.isActive ? s.active : s.item}
            >
                Messages
            </NavLink>
            <NavLink 
                to='/news' 
                className={navData => navData.isActive ? s.active : s.item}
            >
                News
            </NavLink>
            <NavLink 
                to='/music' 
                className={navData => navData.isActive ? s.active : s.item}
            >
                Music
            </NavLink>
            <NavLink 
                to='/settings' 
                className={navData => navData.isActive ? s.active : s.item}
            >
                Settings
            </NavLink>
        </nav>
    );
}

export default Navbar;
