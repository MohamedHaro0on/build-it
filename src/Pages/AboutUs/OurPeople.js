import React from 'react'
import ClassNames from "./index.module.scss";
import {SubTitle} from "../../UI/index";
const discriptions = [
    "At buildit we have an open structure, which means that employees work within wide boundaries.",
    `The environment and culture, which is shaped by buildit’s people, is driven by several key factors including transparency, curiosity, inclusivity,
     pragmatism and responsibility. Employees at buildit work in an environment where everyone is encouraged to continually develop through a cohesive unit of learning, 
     and perhaps more importantly, given the autonomy to do so.`,
    "We approach each project and client as unique and we never start with a preconceived outcome or solution."
];
const WhatWeDo = () => (
    <>
        <SubTitle>How We Do it </SubTitle>
        {discriptions.map((element, index) => {
            return (
                <p className={ClassNames.Discription} key={index}>
                    {element}
                </p>
            )
        })}
        <p className={`${ClassNames.Discription} ${ClassNames.ITalic}`}>
            We are part of the larger <a href="https://www.wipro.com/">Wipro</a>
            network and partner with:
        </p>
    </>
)
export default WhatWeDo;