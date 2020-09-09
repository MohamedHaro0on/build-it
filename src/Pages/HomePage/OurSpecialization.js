import React from 'react'
import ClassNames from "./HomePage.module.scss";
import {Link} from "react-router-dom";
import {StyledAnchor} from "../../UI/index";

function OurSpecialization (props)  {
    return (
        <div className={ClassNames.OurSpecializationContainer}>
            <div>
                <h2>buildit is a global engineering and co-innovation consultancy</h2>
                <p>We specialize in solving highly complex business problems.</p>
                <StyledAnchor> <Link to = "/about-us">About us </Link> </StyledAnchor>
            </div>
        </div>
    )
}

export default OurSpecialization
