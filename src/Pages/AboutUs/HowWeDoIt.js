import React from 'react'
import { SubTitle, Discription} from "../../UI/index";
import ClassNames from "./AboutUs.module.scss";

const discriptions = [
    "We are pragmatic partners who seek out the challenging work in all engagements, whether at enterprise scale or startup speed.",
    "We are problem solvers who hone our craft through experimentation, continuous improvement and systems thinking.",
    "We approach each project and client as unique and we never start with a preconceived outcome or solution."
]

function WhatWeDo() {
    return (
        <>
            <SubTitle>How We Do it </SubTitle>
            {discriptions.map((element, index) => {
                return (
                    <Discription key={index}>
                        {element}
                    </Discription>
                )
            })}
            <Discription className={ClassNames.ITalic}>
                Read more about how we approach
                    <a href="https://medium.com/buildit/org-change/home">
                    continuous improvement and systems thinking
                    </a>
                on our Medium blog.
            </Discription>
        </>
    )
}
export default WhatWeDo;