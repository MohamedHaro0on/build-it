import React from 'react'
import ClassNames from "./index.module.scss";
import ReactDom from "react-dom"
const DomNode = document.getElementById("OurIndustries")
const OurIndustries = () =>{
    const ourIndustreis = [
        "Utilities" , "Charities" , "Finance" , "Healthcare" ,"Banking" , "Technology","Communications","Retail"
    ]
    return ReactDom.createPortal((
        <div className = {ClassNames.OurIndustreisContainer}>
            <div>
                <p>Here are some of the industries we have worked with:</p>
                <ul className = {ClassNames.List}>
                    {ourIndustreis.map((industry , index) => <li key = {index}>{industry}</li>)}
                </ul>
            </div>
        </div>
    ) , DomNode)
}

export default OurIndustries
