import React from 'react'
import { StyledAnchor } from "../../UI/index";
import ClassNames from './Careers.module.scss';
import { JobApplicaions } from "../../Data";


const OpenApplications = () => {
    return (
        <>
            <StyledAnchor> <a href="#HiringProccess">Our hiring process</a></StyledAnchor>
            <ul className={ClassNames.ListContainer}>
                {JobApplicaions.map(({ city, appilcations }, index) => {
                    return (
                        <li key={city + index}>
                            <p>{city}</p>
                            <div className={ClassNames.ApplicationsContainer}>
                                {appilcations.map(({ href, position }, idx) => {
                                    return (
                                        <a href={href} key={href + idx} target="_blank" rel="noopener noreferrer">
                                            {position}
                                        </a>
                                    )
                                })}
                            </div>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default OpenApplications;
