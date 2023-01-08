import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navItem}><a href='#'>Profile</a></div>
            <div className={s.navItem}><a href='#'>Messages</a></div>
            <div className={s.navItem}><a href='#'>News</a></div>
            <div className={s.navItem}><a href='#'>Music</a></div>
            <div className={s.navItem}><a href='#'>Settings</a></div>
        </nav>
    );
};

export default Navbar;