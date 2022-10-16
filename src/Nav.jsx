import React from "react";
import { Link } from "react-router-dom";
import logo from './images/logo_check.png'
import {RiArrowDropDownLine} from 'react-icons/ri'

const Nav = () => {
    return (<>
        <section id="nav">
            <div className="logo">
                <img src={logo} alt="Stivers-Post" /> 
                <p>Stiver's Post</p>
            </div>
            <div className="link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/internship">Internship</Link></li>
                <li className="dropdown"><p>Jobs</p><RiArrowDropDownLine className="drop_down_icons"/>
                <ul className="hover_jobs">
                    <li><Link to="/Job">Fresher</Link></li>
                    <li><Link to="/experience">Experienced</Link></li>
                </ul>
                </li>
                <li><Link to="/contest">Contests</Link></li>
                <li><Link to="/hackthon">Hackathon</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </div>
        </section>
    </>)
}

export default Nav;