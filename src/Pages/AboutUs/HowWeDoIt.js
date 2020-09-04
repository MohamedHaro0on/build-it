import React from 'react'
import ClassNames from "./index.module.scss";
const discriptions = [
    "We are pragmatic partners who seek out the challenging work in all engagements, whether at enterprise scale or startup speed.",
    "We are problem solvers who hone our craft through experimentation, continuous improvement and systems thinking.",
    "We approach each project and client as unique and we never start with a preconceived outcome or solution."
]
const WhatWeDo = () => (
    <>
        <h3 className={ClassNames.SubTitle}>How We Do it </h3>
        {discriptions.map((element, index) => {
            return (
                <p className={ClassNames.Discription} key={index}>
                    {element}
                </p>
            )
        })}
        <p className={`${ClassNames.Discription} ${ClassNames.ITalic}`}>
            Read more about how we approach <a href="https://medium.com/buildit/org-change/home">continuous improvement and systems thinking</a>
            on our Medium blog.
        </p>
    </>
)
export default WhatWeDo;