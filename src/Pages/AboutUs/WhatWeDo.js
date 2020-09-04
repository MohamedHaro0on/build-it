import React from 'react'
import { BlockQuote, SubTitle } from "../../UI/index";
import ClassNames from "./index.module.scss";

const WhatWeDo = () => (
    <>
        <SubTitle SubTitle> What we do</SubTitle>
        <p className={ClassNames.Discription}>
            We partner with our clients to solve hard problems, and help them deliver world-class products.
            We help them improve the way they solve business problems, ultimately changing the way they change
            </p>
        <BlockQuote>
                We are problem solvers who hone our craft through experimentation, continuous improvement and systems thinking.
        </BlockQuote>
        <p className={ClassNames.Discription}>
            True transformation only happens when change touches all areas of a company. We believe that change must be holistic and consider all
            aspects of the organisational stack, from recruitment to procurement, from operations to engineering, and from sales to support.
            We call this vertical transformation.
            </p>
        <p className={`${ClassNames.Discription} ${ClassNames.ITalic}`}>
            Read more about some of the <a href="https://medium.com/buildit/technology/home">technologies</a>
            we work with, and our thoughts on <a href='https://medium.com/buildit/design-systems/home'>Design Systems</a> on our Medium blog.
        </p>
    </>
)
export default WhatWeDo;