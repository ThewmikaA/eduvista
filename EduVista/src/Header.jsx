import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Header.css';

function Header(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return(
        <header id='header' className={isScrolled ? 'sticky' : 'not-scrolled'}>
            <Link to="/" className="logo">EduVista</Link>
            <Link to="/" className=".logo">
                <img className="navbar-image" src="./EduVista.png" alt="Navbar-Image"></img>
            </Link>

            <ul className="navbar">
                <li><Link to="/Courses">Courses</Link></li>
                <li><Link to="/ParentPortal">Parent Portal</Link></li>
                <li><Link to="/TutorDashboard">Teach on EduVista</Link></li>
                <li>{isScrolled ?(<Link to="/Login"><img src="./Account-icon (1).png" id='account-icon' alt=""/></Link>):(<Link to="/Login"><img src="./Account-icon (2).png" id='account-icon' alt=""/></Link>)}</li>
            </ul>
        </header>
    );
}
export default Header