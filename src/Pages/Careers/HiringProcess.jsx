import React from 'react'
import { StyledAnchor } from "../../UI/index";
import ClassNames from './Careers.module.scss';


function HiringProcess() {

    const jobApplicaions = [
        {
            city: "Bengaluru",
            appilcations: [
                {
                    position: "Front End Engineer (with React)",
                    href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
                }
            ]
        },
        {
            city: "Edinburgh",
            appilcations: [
                {
                    position: "Java Full-Stack Engineer",
                    href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
                },
                {
                    position: "Full-Stack Engineer",
                    href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
                },
                {
                    position: "Lead Platform Engineer",
                    href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
                },
                {
                    position: "Solution Architect",
                    href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
                },
            ]
        },
        {
            city: "London",
            appilcations: [
                {
                    position: "Lead Platform Engineer - Google Cloud",
                    href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
                }
            ]
        },
        {
            city: "New York",
            appilcations: [
                {
                    position: "Principal Software Engineer",
                    href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
                }
            ]
        },

    ]
    return (
        <>
            <StyledAnchor> <a href="#OurHiringProcess">Our hiring process</a></StyledAnchor>
            <ul className={ClassNames.ListContainer}>

                {jobApplicaions.map((job, index) => {
                    return (
                        <li key={job.city + index}>
                            <p>{job.city}</p>
                            <div className={ClassNames.ApplicationsContainer}>
                                {job.appilcations.map((app, idx) => {
                                    return (
                                        <a href={app.href} key={app.href + idx} target = "_blank" rel = "noopener noreferrer">
                                            {app.position}
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

export default HiringProcess
