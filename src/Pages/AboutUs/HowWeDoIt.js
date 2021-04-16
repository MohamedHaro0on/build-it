import React from 'react'
import { SubTitle, Discription } from "../../UI/index";
import ClassNames from "./AboutUs.module.scss";
import { AboutUsDiscriptions } from "../../Data";

const WhatWeDo = () => {
    return (
        <>
            <SubTitle>How We Do it </SubTitle>
            {AboutUsDiscriptions.map((element, index) => {
                return (
                    <Discription key={index}>
                        {element}
                    </Discription>
                )
            })}
            <Discription className={ClassNames.ITalic}>
                Read more about how we approach
                    <a href="https://medium.com/buildit/org-change/home" target="_blank" aria-label="visit our blog" rel="noopener noreferrer" >
                    continuous improvement and systems thinking
                    </a>
                on our Medium blog.
            </Discription>
        </>
    )
}
export default WhatWeDo;