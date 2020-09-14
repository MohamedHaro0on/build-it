import React from 'react'
import WhoWerAre from './WhoWerAre'
import ClassNames from "./AboutUs.module.scss";
import WhatWeDo from './WhatWeDo';
import HowWeDoIt from "./HowWeDoIt";
import { Title } from '../../UI';
function AboutUsPage () {
    return (
        <div className={ClassNames.AboutUsContainer}>
            {/* <h2>AboutUs</h2> */}
            <Title>AboutUs</Title>
            <WhoWerAre />
            <WhatWeDo />
            <HowWeDoIt />
        </div>
    )
}

export default AboutUsPage