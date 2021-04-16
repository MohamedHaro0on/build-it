import React from 'react'
import ClassNames from "./HomePage.module.scss";
import ReactDom from "react-dom";
import { List } from "../../UI/index";
import {ourIndustreis} from "../../Data";

const DomNode = document.getElementById("OurIndustries")

const OurIndustries  = () => {

    return ReactDom.createPortal((
        <div className={ClassNames.OurIndustreisContainer}>
            <div>
                <p>Here are some of the industries we have worked with:</p>
                <List>
                    {ourIndustreis.map((industry, index) => <li key={index}>{industry}</li>)}
                </List>
            </div>
        </div>
    ), DomNode)
}

export default OurIndustries
