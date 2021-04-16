import React from 'react'
import ClassNames from "./AboutUs.module.scss";
import { SubTitle , Discription } from "../../UI/index";
import {OurPeople} from "../../Data";

const WhatWeDo = () =>{
    return (
        <>
            <SubTitle>How We Do it </SubTitle>
            {OurPeople.map((element, index) => {
                return (
                    <Discription  key={index}>
                        {element}
                    </Discription>
                )
            })}
            <Discription className={ClassNames.ITalic}>
                We are part of the larger <a href="https://www.wipro.com/">Wipro</a>
                    network and partner with:
                </Discription>
        </>
    )
}
export default WhatWeDo;