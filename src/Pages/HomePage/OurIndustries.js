import React from 'react'
import ClassNames from "./index.module.scss";
import ReactDom from "react-dom";
import {List} from "../../UI/index";
const DomNode = document.getElementById("OurIndustries")

function OurIndustries  () {
    const ourIndustreis = [
        "Utilities" , "Charities" , "Finance" , "Healthcare" ,"Banking" , "Technology","Communications","Retail"
    ]
    return ReactDom.createPortal((
        <div className = {ClassNames.OurIndustreisContainer}>
            <div>
                <p>Here are some of the industries we have worked with:</p>
                <List>
                    {ourIndustreis.map((industry , index) => <li key = {index}>{industry}</li>)}
                </List>
            </div>
        </div>
    ) , DomNode)
}

export default OurIndustries
