import React from "react";
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
// import {FaTwitter} from 'react-icons/fa'
// import { Link } from "react-router-dom";

const Footer=()=>{
    return(<>
        <footer>
           <p className="copyright"><AiOutlineCopyrightCircle/>Copyright 2022 | All rights reserved by Stiver's Post</p>
                {/* <li><Link to="/internship">Internship</Link></li>
                <li><Link to="/Job">Job's</Link></li>
                <li><Link to="/contest">Contest's</Link></li>
                <li><Link to="/hackthon">Hackthon</Link></li>
                <li><Link to="/contact">Contact Us</Link></li> */}

        </footer>
    </>)
}

export default Footer;