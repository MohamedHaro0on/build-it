import React from 'react'
import ClassNames from "./HomePage.module.scss";
import {Link} from "react-router-dom";
import {List , Discription} from "../../UI/index";

function  OurPractices  () {
    const ourPratices = ["Agile coaching","Lean UX" , "Engineering transformation" , "Experiential learning" ,"Design systems","Systems thinking"];
    return (
        <div className = {ClassNames.OurPracticesContainer}>
            <blockquote>Our multidisciplinary consultants leverage engineering best practices, tools, methodologies and new ways of working to deliver true business outcomes for our clients.</blockquote>
            <p>Some areas of practice we are passionate about:</p>
            <List>
                {ourPratices.map((practice , index)=><li key = {index}>{practice}</li>)}
            </List>
            <Discription>To learn more, check out our <Link to = "/blog"> Blog</Link></Discription>
        </div>
    )
}

export default OurPractices
