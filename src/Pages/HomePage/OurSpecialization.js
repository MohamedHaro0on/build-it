import React from 'react'
import ClassNames from "./index.module.scss";
import {Link} from "react-router-dom";


function OurSpecialization (props)  {
    return (
        <div className={ClassNames.OurSpecializationContainer}>
            <div>
                <h2>buildit is a global engineering and co-innovation consultancy</h2>
                <p>We specialize in solving highly complex business problems.</p>
                <Link to = "/about-us">About us </Link>
            </div>
        </div>
    )
}

export default OurSpecialization
