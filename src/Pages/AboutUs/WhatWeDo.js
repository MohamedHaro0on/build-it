import React from 'react'
import { BlockQuote, SubTitle , Discription} from "../../UI/index";
import ClassNames from "./AboutUs.module.scss";

const WhatWeDo = ()=> {
    return (
        <>
            <SubTitle SubTitle> What we do</SubTitle>
            <Discription>
                We partner with our clients to solve hard problems, and help them deliver world-class products.
                We help them improve the way they solve business problems, ultimately changing the way they change
            </Discription>
            <BlockQuote>
                We are problem solvers who hone our craft through experimentation, continuous improvement and systems thinking.
        </BlockQuote>
            <Discription>
                True transformation only happens when change touches all areas of a company. We believe that change must be holistic and consider all
                aspects of the organisational stack, from recruitment to procurement, from operations to engineering, and from sales to support.
                We call this vertical transformation.
            </Discription>
            <Discription className={ClassNames.ITalic}>
                Read more about some of the <a href="https://medium.com/buildit/technology/home">technologies</a>
            we work with, and our thoughts on <a href='https://medium.com/buildit/design-systems/home'>Design Systems</a> on our Medium blog.
        </Discription>
        </>
    )
}
export default WhatWeDo; 