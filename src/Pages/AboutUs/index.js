import React from 'react'
import WhoWerAre from './WhoWerAre'
import ClassNames from "./AboutUs.module.scss";
import WhatWeDo from './WhatWeDo';
import HowWeDoIt from "./HowWeDoIt";
import { Title } from '../../UI';


const AboutUsPage = () =>{
    return (
        <div className={ClassNames.AboutUsContainer}>
            <Title>AboutUs</Title>
            <WhoWerAre />
            <WhatWeDo />
            <HowWeDoIt />
        </div>
    )
}

export default AboutUsPage